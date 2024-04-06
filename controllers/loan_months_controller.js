const monthsData = require("../mockJsonData/months.json");

const loanMonths = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Months avaliable",
      data: monthsData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch months",
    });
  }
};

module.exports = {
  loanMonths,
};
