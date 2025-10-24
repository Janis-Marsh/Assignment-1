// Shopping discount calculator
const prompt = require('prompt-sync')();
let price = parseInt(prompt("The original price is :"));
let discount = parseInt(prompt("The discount percentage is :"));
let final= price - (price * discount / 100)
console.log(" The final price is " + final )