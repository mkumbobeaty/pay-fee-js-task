const fs = require('fs');

//read data from Json file with error handling;

const jsonInputData = (path) => {
    //read data asynchronously;
    const jsonData = fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log('Error reading this file');
        }
        try {

            const objectData = JSON.parse(data)
            console.log(objectData)
            return objectData
        }
        catch (err) {
            console.log(err.message)
        }
    })

    return jsonData;
}

module.exports = jsonInputData;