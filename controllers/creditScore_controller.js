const { pancards } = require("../mockJsonData/pancard");

const creditScore = async (req, res) => {
  try {
    let data = pancards.find(
      (item) => item.pancard_number === req.body.pancard_no
    );
    if (data) {
      await connection.query(
        `UPDATE user_details SET credit_score = ${data.credit_score} where pancard_no = ${req.body.pancard_no}`
      );

      res.status(200).json({
        success: true,
        message: "Credit score fetched successfully",
        data,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "Invalid Pancard number",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = {
  creditScore,
};
