
const fetchData = require('./fetchData');

const configUrl = 'https://private-anon-24b1a4759b-paysera.apiary-mock.com';
const processedData = async (data) => {

        const result = [];
        for (let i = 0; i < data.length; i++) {
            const payments = data[i];
            const { type, user_type } = payments;

            //defining APIs url for the cash in and cash out
            const apiUrls = {
                'cash_in': `${configUrl}/cash-in`,
                'cash_out': `${configUrl}/cash-out-${user_type}`
            }

            // calculating fee from fetched APIs data
            const feeConfig = await fetchData(apiUrls[type]);
            console.log("configured data", feeConfig)

            // result.push()
        }

        return result;

}

module.exports = processedData;