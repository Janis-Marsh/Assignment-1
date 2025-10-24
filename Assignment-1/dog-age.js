// dog age converter
const prompt = require('prompt-sync')();
let age = parseInt(prompt("Enter Your dog's age :"));
let result= age * 7
console.log(" Your dog is " + result + " in human years" )