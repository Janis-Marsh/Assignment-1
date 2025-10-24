// Monthly Savings Calculator
const prompt = require('prompt-sync')();
let monthly = parseInt(prompt("Amount you saved each month is :"));
let total= monthly * 12
console.log("Your yearly savings are : " + total)