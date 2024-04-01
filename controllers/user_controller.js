const { pancards } = require("../mockJsonData/pancard");

const user_details = async (req, res) => {
    try {
        const connection = req.app.get("mysqlConnection");
        const { first_name, last_name, email_id, pancard_no, mobile_no, dob } = req.body;
        
        const filteredData = pancards.find(
            (item) => item.pancard_number === pancard_no
        );
        if (!filteredData || !filteredData.status || filteredData.status != 1) {
            return res
                .status(400)
                .json({ success: false, message: "Pancard Verfication failed" });
        }
        let result = await connection.query('INSERT INTO user_details SET ?', req.body);
        let Lead_no = 'LOAN' + Math.floor(100000 + Math.random() * 900000);
        let loanBody = {
            lead_no: Lead_no,
            lead_status: 'Started',
            user_id: result[0].insertId,
            
        }
        await connection.query('INSERT INTO loan_lead SET ?', loanBody)
        res.status(201).json({
            success: true,
            message: "User Data validated and saved successfully",
            ...req.body,
        });
    } catch (error) {
        console.log("user Error", error);
        res
            .status(500)
            .json({ success: false, message: "User Data insertion failed" });
    }
}

module.exports = {
    user_details
}