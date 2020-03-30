const fs = require('fs');

const dataBUffer = fs.readFileSync('1-json.json');
const dataObj = JSON.parse(dataBUffer.toString());

console.log(dataObj);

dataObj.name="Rushesh";
dataObj.age=23;

fs.writeFileSync('1-json.json',JSON.stringify(dataObj));