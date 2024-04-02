const suggestBanks = async (
  userCreditScore,
  requiredLoanAmount,
  repaymentYears,
  bankData
) => {
  console.log(userCreditScore, requiredLoanAmount, repaymentYears);
  const suggestedBanks = [];

  bankData.forEach((bank) => {
    // Convert minimum credit score and loan amount to integers
    const minCreditScore = parseInt(bank.min_credit_score);
    const minAmount = parseInt(bank.min_amount);

    // Check if user's credit score, required loan amount, and repayment period meet bank's criteria
    if (
      userCreditScore >= minCreditScore &&
      requiredLoanAmount >= minAmount &&
      repaymentYears >= 1 // Assuming repayment period should be at least 1 year
    ) {
      // Calculate interest amount based on interest rate and loan amount
      const interestRate = parseFloat(bank.roi) / 100; // Convert interest rate to decimal
      const monthlyInterestRate = interestRate / 12; // Monthly interest rate
      const numberOfPayments = repaymentYears * 12; // Total number of payments

      // Calculate monthly payment using the formula for loan amortization
      const monthlyPayment =
        (requiredLoanAmount * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

      // Calculate total loan amount including interest
      const totalLoanAmount = monthlyPayment * numberOfPayments;

      // Calculate monthly interest
      const monthlyInterest =
        (totalLoanAmount - requiredLoanAmount) / numberOfPayments;

      suggestedBanks.push({
        name: bank.name,
        offeredLoanAmount: totalLoanAmount.toFixed(2),
        interestRate: parseFloat(bank.roi),
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
