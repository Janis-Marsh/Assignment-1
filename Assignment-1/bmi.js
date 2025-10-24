// BMI (Body Mass Index) Calculator

const prompt = require('prompt-sync')();
let weight = (prompt("Your weight (lbs):"));
let height = (prompt("Your height (inches):"));
let BMI = weight / (height * height)
let index= BMI.toFixed(2);
console.log(index + " BMI")