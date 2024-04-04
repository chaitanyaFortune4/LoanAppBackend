const suggestBanks = async (
  userCreditScore,
  requiredLoanAmount,
  repaymentMonths,
  bankData
) => {
  const suggestedBanks = [];

  bankData.forEach((bank) => {
    // Convert minimum credit score and loan amount to integers
    const minCreditScore = parseInt(bank.min_credit_score);
    const minAmount = parseInt(bank.min_amount);

    // Check if user's credit score, required loan amount, and repayment period meet bank's criteria
    if (
      userCreditScore >= minCreditScore &&
      requiredLoanAmount >= minAmount &&
      repaymentMonths >= 1 // Assuming repayment period should be at least 1 month
    ) {
      // Calculate interest amount based on interest rate and loan amount
      const interestRate = parseFloat(bank.roi) / 100; // Convert interest rate to decimal
      const monthlyInterestRate = interestRate / 12; // Monthly interest rate
      const numberOfPayments = repaymentMonths; // Total number of payments is now the repayment period in months

      // Calculate monthly payment using the formula for loan amortization
      const monthlyPayment =
        (requiredLoanAmount * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

      // Calculate total loan amount including interest
      const totalLoanAmount = monthlyPayment * numberOfPayments;

      // Calculate monthly interest
      const monthlyInterest =
        (totalLoanAmount - requiredLoanAmount) / numberOfPayments;
      const totalInterest = monthlyInterest * repaymentMonths
      suggestedBanks.push({
        name: bank.name,
        interestRate: parseFloat(bank.roi),
        totalAmountPayable: totalLoanAmount.toFixed(2),
        totalInterestPayable: totalInterest.toFixed(2),
        monthlyPayment: monthlyPayment.toFixed(2), // Round to 2 decimal places
        monthlyInterest: monthlyInterest.toFixed(2), // Round to 2 decimal places
      });
    }
  });

  return suggestedBanks;
};

module.exports = {
  suggestBanks,
};