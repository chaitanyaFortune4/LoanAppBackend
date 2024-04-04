const { pancards } = require("../mockJsonData/pancard");

const creditScore = async (req, res) => {
  try {
    let data = pancards.find(
      (item) => item.pancard_number === req.body.pancard_no
    );
    if (data) {
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
