const { generateRepaymentSchedule } = require("../utils/loanRepaymentService");

const loan_repayment_details = async (req, res) => {
  try {
    const { totalLoan_amount, repayment_months, interest_rate } = req.body;

    const repaymentSchedule = await generateRepaymentSchedule(
      Number(totalLoan_amount),
      Number(repayment_months),
      Number(interest_rate)
    );

    res.status(200).json({
      success: true,
      message: "Repayment schedule generated",
      data: repaymentSchedule,
    });
  } catch (error) {
    console.log("repayment", error);
    res.status(500).json({
      success: false,
      message: "Failed to generate repayment schedule",
      error: error,
    });
  }
};

module.exports = {
  loan_repayment_details,
};
