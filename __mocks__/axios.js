
const axiosMock = {
    get: jest.fn(() => Promise.resolve({
        data: { percents: 0.3, week_limit: { amount: 1000, currency: 'EUR' } }
    }))
}

module.exports = axiosMock;