const weeklyCalculation = require("./weeklyCalculation");

//roud number to upper bond
const roundingNumber = (number) => {
    return (Math.ceil(number * 100) / 100).toFixed(2)
}

const getCommisionFees = (transaction, feeConfig) => {
    //calculate default commission

    let fee = transaction.operation.amount * feeConfig.percents * 0.01;


    // check if WEEK_LIMIT exists for this operation
    if (feeConfig.week_limit) {
        fee = weeklyCalculation(transaction, feeConfig);
    }

    // check if MAX limit exists for this operation
    if (feeConfig.max) {
        fee = (fee > feeConfig.max.amount) ? feeConfig.max.amount : fee;
    }

    //check if min limit exists for the operation
    if (feeConfig.min) {
        fee = (fee > feeConfig.min.amount) ? fee : feeConfig.min.amount

    }

    //round number to upper bound
    return roundingNumber(fee);
}


module.exports = getCommisionFees;