// Tip calculator
const prompt = require('prompt-sync')();
let bill = parseInt(prompt("Your bill is :"));
let tip = parseInt(prompt("The tip percentage you want to give is :"));
let tipamount = (bill * tip / 100)
let total= bill + (bill * tip / 100)
console.log(" Your tip amount is " + tipamount + " Your final amount is " + total )