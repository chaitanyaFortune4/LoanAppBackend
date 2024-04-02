const { sendEmailOtp } = require("../utils/emailService");

const requestOtp = async (req, res) => {
  try {
    const connection = req.app.get("mysqlConnection");
    const { email_id, mobile_no } = req.body;
    let delete_previous_otp_query = `DELETE FROM otp_verification WHERE mobile_no=${mobile_no}`;
    await connection.query(delete_previous_otp_query);
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
        mobile_no: mobile_no,
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
      .json({ success: false, message: "Request OTP on email failed" });
  }
};

const verifyOtp = async (req, res) => {
  try {
    const connection = req.app.get("mysqlConnection");
    const { otp, mobile_no } = req.body;
    let sql = await connection.query(
      `SELECT * FROM otp_verification where mobile_no = ${mobile_no}`
    );

    if (otp === sql[0][0].otp) {
      let params = {
        mobile_no: mobile_no,
        is_mobile_verify: 1,
      };
      let sql = "INSERT INTO user_details SET ?";
      await connection.query(sql, params);
      return res.status(200).json({
        success: true,
        message: "Otp verified successfully",
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
