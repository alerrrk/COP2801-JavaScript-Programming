// Starting bank account balance
var totalBalance = 250000;

// Function subtracts and ressigns totalBalance
function afterFees() {
    var yearlyFee = 100;
    var serviceCharge = 200;
    totalBalance = totalBalance - yearlyFee - serviceCharge;
    return totalBalance;
}
// Assign new total to var-iable
var balanceAfterFees = afterFees();

// Function to estimate next-year's numbers with "user's input" and variable from previous function
function yearEnd(estYearly, estMonthly) {
    var estimatedNextYear = balanceAfterFees + estYearly;
    var estimatedAfterCosts = estimatedNextYear - estMonthly * 12;
    return estimatedAfterCosts;
}

// "User input" figures
var estimatedYearlyIncome = 300000;
var estimatedMonthlyCosts = 10000;

// Assign yearEnd function to var-iable for message
var finalNumber = yearEnd(estimatedYearlyIncome, estimatedMonthlyCosts);

// Write message in to document
document.write(`Hello Hugh, this is Bank of America notifying you of year-end charges to your account. 
    You have $${balanceAfterFees} after your yearly fee(s) and service charge. 
    Your estimated next year-end total, before fees, will be $${finalNumber}.`);