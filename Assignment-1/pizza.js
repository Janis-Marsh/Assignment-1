// Pizza slice calculator
const prompt = require('prompt-sync')();
let friends = parseInt(prompt("How many friends are attending? :"));
let slices = parseInt(prompt("How many slices does each friend want? :"));
let total= friends * slices;
console.log(" You need a total of " + total + " pizza slices for " + friends + " friends. " )