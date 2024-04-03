const { suggestBanks } = require("../utils/bankService");
const bankData = require("../mockJsonData/banks.json");

const bank_details = async (req, res) => {
  try {
    const { credit_score, loan_amount, tenure_in_months } = req.body;

    const bankOffers = await suggestBanks(
      Number(credit_score),
      Number(loan_amount),
      Number(tenure_in_months),
      bankData
    );

    res
      .status(200)
      .json({ success: true, message: "Bank Offers found", data: bankOffers });
  } catch (error) {
    console.log("bank err", error);
    res.status(500).json({
      success: false,
      message: "Get Bank Offers failed",
      error: error,
    });
  }
};

module.exports = {
  bank_details,
};