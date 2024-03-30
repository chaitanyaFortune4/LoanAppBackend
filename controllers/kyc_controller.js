const { pancards } = require("../mockJsonData/pancard");
const { validateKycRequest } = require("../utils/validations");

const kycVerification = async (req, res) => {
  try {
    const connection = req.app.get("mysqlConnection");
    const { first_name, last_name, email_id, pancard_no, mobile_no, dob } =
      req.body;

    let sql = await connection.query(
      `SELECT * FROM kyc_verify where mobile_no = ${mobile_no}`
    );

    if (sql[0].length < 1 || !sql[0][0].is_mobile_verify) {
      return res.status(400).json({
        success: false,
        message: `Mobile no. not verified`,
      });
    }
    const validations = [
      { param: "first_name", type: "string", required: true },
      { param: "last_name", type: "string", required: true },
      { param: "email_id", type: "string", required: true },
      { param: "mobile_no", type: "number", required: true },
      { param: "aadharcard_no", type: "number", required: true },
      { param: "pancard_no", type: "string", required: true },
      { param: "dob", type: "string", required: true },
      { param: "address", type: "string", required: true },
      { param: "pincode", type: "number", required: true },
    ];
    const errors = validateKycRequest(req.body, validations);
    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Validation error - ${errors.join(" | ")}`,
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

    connection.query(
      `UPDATE kyc_verify SET ? where mobile_no = ${mobile_no}`,
      req.body
    );
    res.status(201).json({
      success: true,
      message: "KYC Data validated successfully and saved",
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
