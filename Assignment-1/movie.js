// Movie duration converter
const prompt = require('prompt-sync')();
let totalMin = parseInt(prompt("Total amount of minutes is :"));
let hours= totalMin / 60 
let minutes = totalMin % 60
console.log(hours + " and " + minutes)