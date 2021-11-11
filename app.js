const inputData = require('./modules/dataModules/inputData');
const processedData = require('./modules/dataModules/processedData');

let fileName = process.argv.slice(2)[0];

//module to set file name for reading json data and process them
if(!fileName){
    fileName = 'input.json';
}

const data = inputData(`./${fileName}`);

processedData(data)