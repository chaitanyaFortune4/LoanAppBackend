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
      month: month.toString(),
      principalAmount: principalPaid.toFixed(2),
      interestCharged: interestCharged.toFixed(2),
      totalPayment: monthlyPayment.toFixed(2),
      balanceAmount: balance.toFixed(2),
    });
  }

  return schedule;
};

module.exports = {
  generateRepaymentSchedule,
};
