/*
    user ask a question

*/



const readline = require("readline");

let Question = "";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function inputQ() {
    rl.question("Ask your question: ", function (x) {
        Question = x;
        rl.close();
        processQ(); // coll the process function
    });

}
inputQ();

function processQ() {
    console.log("You question:", Question);

}
// processQ();




