const client = require("../config/redis_config");
const { pancards } = require("../mockJsonData/pancard");
const { sendEmailLeadNo } = require("../utils/emailService");

const user_details = async (req, res) => {
    try {
        const connection = req.app.get("mysqlConnection");
        const {
            first_name,
            last_name,
            email_id,
            pancard_no,
            mobile_no,
            dob,
            address,
            address2,
            state,
            city,
        } = req.body;

        const filteredData = pancards.find(
            (item) => item.pancard_number === pancard_no
        );
        if (!filteredData || !filteredData.status || filteredData.status != 1) {
            return res
                .status(400)
                .json({ success: false, message: "Pancard Verfication failed" });
        }
        let data = await connection.query(
            `SELECT * FROM user_details WHERE 
            mobile_no = "${mobile_no}" 
            AND pancard_no = "${pancard_no}" 
            AND email_id = "${email_id}"`
        )
        if (data[0].length > 0) {
            await connection.query('UPDATE user_details SET ?', { ...req.body, updated_on: new Date() })
            let result = await connection.query(`SELECT lead_no FROM loan_lead WHERE user_id = "${data[0][0].user_id}" `)
            await sendEmailLeadNo(email_id, result[0][0].lead_no, data = "Updated")
            await client.set(`${result[0][0].lead_no}`, JSON.stringify(req.body))
            return res.status(201).json({
                success: true,
                message:
                    "User details updated successfully",
            });
        }
        let result = await connection.query(
            "INSERT INTO user_details SET ?",
            req.body
        );
        let Lead_no = "LOAN" + Math.floor(100000 + Math.random() * 900000);
        let loanBody = {
            lead_no: Lead_no,
            lead_status: "Started",
            user_id: result[0].insertId,
        };
        let result1 = await connection.query(
            "INSERT INTO loan_lead SET ?",
            loanBody
        );
        if (result1[0].affectedRows === 1) {
            await sendEmailLeadNo(email_id, Lead_no);
            await client.set(
                `${Lead_no}`,
                JSON.stringify({ ...loanBody, ...req.body })
            );
        }
        res.status(201).json({
            success: true,
            message:
                "Lead generated successfully, Please check your email for Lead Number",
            ...req.body,
        });
    } catch (error) {
        console.log("user Error", error);
        res
            .status(500)
            .json({ success: false, message: "User Data insertion failed" });
    }
};

const getUserDetails = async (req, res) => {
    try {
        const connection = req.app.get("mysqlConnection");
        const { lead_no } = req.body;

        const cacheData = await client.get(lead_no);

        if (cacheData) {
            return res.status(200).json({
                success: true,
                message: "User details found",
                data: JSON.parse(cacheData),
            });
        }

        let sql = await connection.query(
            `SELECT u.* ,l.lead_status,l.lead_no FROM user_details u
      LEFT JOIN loan_lead l ON l.user_id = u.user_id WHERE l.lead_no = "${lead_no}"`
        );

        if (sql[0].length < 1) {
            return res.status(400).json({
                success: false,
                message: "User details not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "User details found",
            data: sql[0][0],
        });
    } catch (error) {
        console.log("ERR", error);
        res.status(500).json({
            success: false,
            message: "Get user details failed",
        });
    }
};

module.exports = {
    user_details,
    getUserDetails,
};
