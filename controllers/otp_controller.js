const { sendEmailOtp } = require("../utils/emailService");
const {
  validateRequestOtp,
  validateVerifyOtp,
} = require("../utils/validations");

const requestOtp = async (req, res) => {
  try {
    const connection = req.app.get("mysqlConnection");
    const { email_id, mobile_no } = req.body;
    const validations = [
      { param: "email_id", type: "string", required: true },
      { param: "mobile_no", type: "number", required: true },
    ];
    const errors = validateRequestOtp(req.body, validations);
    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Validation error - ${errors.join(" | ")}`,
      });
    }
    let otp = Math.floor(100000 + Math.random() * 900000);
    let otp_params = {
      mobile_no: mobile_no,
      email_address: email_id,
      otp: otp,
    };
    const current_time = new Date();
    current_time.setMinutes(current_time.getMinutes() + 2);
    const isEmailSent = await sendEmailOtp(otp_params);
    if (isEmailSent) {
      let userdata = {
        User_ID: mobile_no,
        otp: otp,
        expire_time: current_time,
      };
      let insert_otp_query = `INSERT INTO otp_verification SET ? `;
      await connection.query(insert_otp_query, userdata);
    } else {
      return res.status(500).json({
        success: false,
        message: "Sending Otp on email failed",
      });
    }
    res.status(201).json({
      success: true,
      message: "Otp sent on email successfully",
    });
  } catch (error) {
    console.log("otp error", error);
    res
      .status(500)
      .json({ success: false, message: "Email OTP request failed" });
  }
};

const verifyOtp = async (req, res) => {
  try {
    const connection = req.app.get("mysqlConnection");
    const { otp, mobile_no } = req.body;
    const validations = [
      { param: "otp", type: "number", required: true },
      { param: "mobile_no", type: "number", required: true },
    ];
    const errors = validateVerifyOtp(req.body, validations);
    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Validation error - ${errors.join(" | ")}`,
      });
    }

    let sql = await connection.query(
      `SELECT * FROM otp_verification where user_id = ${mobile_no}`
    );

    if (otp === sql[0][0].otp) {
      let params = {
        mobile_no: mobile_no,
        is_mobile_verify: 1,
      };
      let sql = "INSERT INTO kyc_verify SET ?";
      await connection.query(sql, params);
      return res.status(200).json({
        success: true,
        message: "Otp verified",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "OTP Verification failed",
    });
  }
};

module.exports = {
  requestOtp,
  verifyOtp,
};
