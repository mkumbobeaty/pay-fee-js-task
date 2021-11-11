const processedData = require("../modules/dataModules/processedData")

inputData = [{ "date": "2016-01-05", "user_id": 1, "user_type": "natural", "type": "cash_in", "operation": { "amount": 200.00, "currency": "EUR" } },
{ "date": "2016-01-06", "user_id": 2, "user_type": "juridical", "type": "cash_out", "operation": { "amount": 300.00, "currency": "EUR" } },
{ "date": "2016-01-06", "user_id": 1, "user_type": "natural", "type": "cash_out", "operation": { "amount": 30000, "currency": "EUR" } }
]

describe('ProcessedData', () => {

    test('should check if the length of output is the same with the input data', async () => {
        const data = await processedData(inputData);
        expect(data.length).toBe(inputData.length);
    });

    test('should check cash out with week limit', async () => {
        const cash_out = await processedData(inputData)
        expect(cash_out).toEqual(
            expect.arrayContaining(["0.60", "0.00", "90.00"])
        )
    });

})