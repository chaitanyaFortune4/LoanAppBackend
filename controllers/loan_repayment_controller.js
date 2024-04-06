const { generateRepaymentSchedule } = require("../utils/loanRepaymentService");
const banks = require("../mockJsonData/banks.json");

const loan_repayment_details = async (req, res) => {
  try {
    const { totalLoan_amount, repayment_months, interest_rate, bank_id } =
      req.body;

    const filteredBank = banks.find((bank) => bank.id === Number(bank_id));

    const repaymentSchedule = await generateRepaymentSchedule(
      Number(totalLoan_amount),
      Number(repayment_months),
      Number(interest_rate)
    );

    res.status(200).json({
      success: true,
      message: "Repayment schedule generated",
      data: {
        selected_bank_details: {
          bank_name: filteredBank.name,
          ifsc_code: filteredBank.ifsc_code,
          address: filteredBank.address,
          applied_loan_amount: totalLoan_amount,
          repayment_months: repayment_months,
        },
        repaymentSchedule: repaymentSchedule,
      },
    });
  } catch (error) {
    console.log("repayment", error);
    res.status(500).json({
      success: false,
      message: "Failed to generate repayment schedule",
    });
  }
};

module.exports = {
  loan_repayment_details,
};
