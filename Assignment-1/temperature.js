// Temperature converter (celsius to fahrenheit)

const prompt = require('prompt-sync')();
let F = (prompt("Temperature in Fahrenheit:"));
let C = (F - 32) * 5/9;
let celsius = C.toFixed(2);
console.log(F + " Degrees Fahrenheit is " + celsius + " Degrees Celsius")