/*
    user ask a question

*/



const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function (x) {
    console.log("You entered:", x);
    rl.close();
});
