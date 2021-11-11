const axios = require('axios');

//function for fetching data from API
const fetchData = async (url) => {

    try{
        const response = await axios.get(url);
        const { data } = response;
        return data;
    }
    catch(error) {
        console.log(error)
    }
}

module.exports = fetchData;