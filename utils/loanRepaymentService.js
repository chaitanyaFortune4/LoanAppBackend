const { formatNumber } = require("./common");

const generateRepaymentSchedule = async (
  totalLoanAmount,
  repaymentMonths,
  interestRate
) => {
  const monthlyInterestRate = interestRate / 12 / 100;
  const monthlyPayment =
    (totalLoanAmount * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -repaymentMonths));
  let balance = totalLoanAmount;
  const schedule = [];

  for (let month = 1; month <= repaymentMonths; month++) {
    const interestCharged = balance * monthlyInterestRate;
    const principalPaid = monthlyPayment - interestCharged;
    balance -= principalPaid;

    schedule.push({
      month: formatNumber(month),
      principalAmount: formatNumber(principalPaid),
      interestCharged: formatNumber(interestCharged),
      totalPayment: formatNumber(monthlyPayment),
      balanceAmount: formatNumber(balance),
    });
  }

  return schedule;
};

module.exports = {
  generateRepaymentSchedule,
};
