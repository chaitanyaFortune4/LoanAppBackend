const { pancards } = require("../mockJsonData/pancard");

const kycVerification = async (req, res) => {
  try {
    const connection = req.app.get("mysqlConnection");
    const { first_name, last_name, email_id, pancard_no, mobile_no, dob } =
      req.body;

    let sql = await connection.query(
      `SELECT * FROM user_details where mobile_no = ${mobile_no}`
    );
    if (sql[0].length < 1 || !sql[0][0].is_mobile_verify) {
      return res.status(400).json({
        success: false,
        message: `Mobile no. not verified`,
      });
    }
    const filteredData = pancards.find(
      (item) => item.pancard_number === pancard_no
    );
    if (!filteredData || !filteredData.status || filteredData.status != 1) {
      return res
        .status(400)
        .json({ success: false, message: "Pancard Verfication failed" });
    }
    await connection.query(
      `UPDATE user_details SET ? where mobile_no = ${mobile_no}`,
      req.body
    );
    res.status(201).json({
      success: true,
      message: "KYC Data validated and saved successfully",
      ...req.body,
    });
  } catch (error) {
    console.log("Kyc Error", error);
    res
      .status(500)
      .json({ success: false, message: "KYC Data insertion failed" });
  }
};

module.exports = {
  kycVerification,
};
