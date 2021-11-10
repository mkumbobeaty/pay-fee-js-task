const fs = require('fs');

// read data from json with error handling
const jsonData = (path) => {
  try {
    return JSON.parse(fs.readFileSync(path));
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = jsonData;
