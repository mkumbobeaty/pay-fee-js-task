const inputData = require('./modules/dataModules/inputData');
const processedData = require('./modules/dataModules/processedData');

let fileName = process.argv.slice(2)[0];

if(!fileName){
    fileName = 'input.json';
}

const data = inputData(`./${fileName}`);

processedData(data)