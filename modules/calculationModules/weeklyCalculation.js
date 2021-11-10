const { startOfWeek, format } = require('date-fns');

const weekHashData = [];

//returns hash string data for the current transaction
const getData = (transaction) => {
    const date = new Date(transaction.date);
    const result = `${format(startOfWeek(date, { weekStartsOn: 1 }), 'MM/dd/yyyy')}_${transaction.user_id}`
    return result;
}

const weeklyTransaction = (transaction, feeConfig) => {

    const { week_limit } = feeConfig;
    const { operation } = transaction;

    //adding new object for each transaction;
    weekHashData.push({
        hash: getData(transaction),
        amount: operation.amount,
    });

    //get user's data for current week
    const weekSum = weekHashData
        .filter(({ hash }) => hash === getData(transaction))
        .reduce((a, b) => a + b.amount, 0);

    //check if exceeded max transaction per week
    if (weekSum > week_limit.amount) {
        let exceededAmount = 0;
        const currentAmount = weekSum - operation.amount;

        //find current exceeded amount
        if (currentAmount >= week_limit.amount) exceededAmount = operation.amount;
        else {
            exceededAmount = operation.amount - week_limit.amount;
        }

        // calculate fee of exceeded amount
        const fee = exceededAmount * feeConfig.percents * 0.01;
        return fee;

    }

    return 0;
}

module.exports = weeklyTransaction;