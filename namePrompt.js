const readlineSync = require("readline-sync");

let userName = readlineSync.question("Whats your name? ");
// console.log("Whats your name?");
// let userName = readlineSync.prompt();

console.log(`Welcome ${userName}`);