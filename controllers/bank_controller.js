const bank_details = async (req, res) => {
    try {
        let numberOfMonths = req.body.loanTerm * 12;
        let loanAmountValue = parseInt(req.body.loanAmount);
        let monthlyInterestRate = parseFloat(req.body.rateOfInterest) / 100 / 12;
        let monthlyPaymentValue =
            (loanAmountValue * monthlyInterestRate) /
            (1 - Math.pow(1 + monthlyInterestRate, -numberOfMonths));
        let totalPayment = monthlyPaymentValue * numberOfMonths
        let totalInterest = totalPayment - loanAmountValue
        console.log("req.body", totalInterest, totalPayment, monthlyPaymentValue);
    } catch (error) {

    }
}

module.exports = {
    bank_details
}
