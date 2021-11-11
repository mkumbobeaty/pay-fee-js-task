const roundingNumber = require('../modules/calculationModules/roundingNumber');

describe('roundingNumbers', () => {
    test('Value must be ceiled', () => {
        expect(roundingNumber(parseFloat(0.023))).toBe('0.03');
        expect(roundingNumber(parseFloat(8.4581136))).toBe('8.46');
        expect(roundingNumber(parseFloat(134578.00000001))).toBe('134578.01');
    });

    test('It must retutn formated 0', () => {
        expect(roundingNumber(parseFloat(0))).toBe('0.00');
    });
});
