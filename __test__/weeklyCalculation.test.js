const weeklyTransaction = require('../modules/calculationModules/weeklyCalculation');

const transaction1 = {
  date: '2016-01-06', user_id: 1, user_type: 'natural', type: 'cash_out', operation: { amount: 30000, currency: 'EUR' },
};

const transaction2 = {
  date: '2020-10-10', user_id: 1124, user_type: 'natural', type: 'cash_out', operation: { amount: 90000000000000, currency: 'EUR' },
};

const transaction3 = {
  date: '2020-10-10', user_id: 666, user_type: 'natural', type: 'cash_out', operation: { amount: 1001, currency: 'EUR' },
};

const transaction4 = {
  date: '2020-05-10', user_id: 999, user_type: 'natural', type: 'cash_out', operation: { amount: 1000, currency: 'EUR' },
};

const transaction5 = {
  date: '2016-02-15', user_id: 1, user_type: 'natural', type: 'cash_out', operation: { amount: 300.00, currency: 'EUR' },
};

const feeConfig = {
  percents: 0.3,
  week_limit: {
    amount: 1000,
    currency: 'EUR',
  },
};

describe('weeklyTransaction', () => {
  test('Commission must be calculated only from exceeded amount', () => {
    expect(weeklyTransaction(transaction1, feeConfig)).toBe(87);
    expect(weeklyTransaction(transaction2, feeConfig)).toBe(269999999997);
    expect(weeklyTransaction(transaction3, feeConfig)).toBe(0.003);
  });

  test('1000.00 EUR per week is free of charge', () => {
    expect(weeklyTransaction(transaction4, feeConfig)).toBe(0);
    expect(weeklyTransaction(transaction5, feeConfig)).toBe(0);
  });
});
