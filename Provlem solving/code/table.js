/*
    Theme:
        - user input some data
        - script return this data as table
*/

const readline = require("readline"); // start project

let Input;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


function _Input() {
    rl.question("\x1b[33m-- writ your name : \x1b[0m", function (x) {

        // check input
        if (x.toLowerCase() === "exit") {
            console.log("⚠️ App closed");
            rl.close();
            return;
        }

        Input = x;
        // rl.close(); // for close rl function
        processTable(); // coll the process function
    });
}
_Input()

function processTable() {
    console.log(`\x1b[44mUser Input is : ${Input} \x1b[0m`) // print user input

    _Input() // recall input function
}
