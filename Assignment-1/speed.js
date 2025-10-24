// Speed calculator

const prompt = require('prompt-sync')();
let distance = (prompt("How many miles traveled:"));
let time = (prompt("How many hours taken:"));
let speed = distance / time
console.log(speed + " miles per hour ")