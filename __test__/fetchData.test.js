const mockAxios = require('../__mocks__/axios');
const fetchData = require('../modules/dataModules/fetchData');

describe('Fetch data module', () => {

    test('Should fetches data from API', async () => {
        // setup
        mockAxios.get.mockImplementationOnce(() =>
            Promise.resolve({
                data: { percents: 0.3, week_limit: { amount: 1000, currency: 'EUR' } }
            })
        );

        const data = await fetchData('cash-in');

        // expect
        expect(data).toEqual({ percents: 0.3, week_limit: { amount: 1000, currency: 'EUR' } });
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
    });

})