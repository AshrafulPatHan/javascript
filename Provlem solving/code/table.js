/*
    Theme:
        - user input some data
        - script return this data as table
    Example:
        +--------------------+--------------------+--------------------+
        | Header 1           | Header 2           | Header 3           |
        +--------------------+--------------------+--------------------+
        | Row 1 Col 1        | Row 1 Col 2        | Row 1 Col 3        |
        +--------------------+--------------------+--------------------+
        | Row 2 Col 1        | Row 2 Col 2        | Row 2 Col 3        |
        +--------------------+--------------------+--------------------+
        | Row 3 Col 1        | Row 3 Col 2        | Row 3 Col 3        |
        +--------------------+--------------------+--------------------+
*/

// 🚀 method 1

function MyTable() {
    let head = ['name', 'email', 'phone'];
    let column = [
        ['kamal', 'kamal@gmal.com', '0919368'],
        ['jamal', 'jamal@gmal.com', '0942736'],
        ['sofik', 'sofik@gmal.com', '0921569']
    ];

    function Output1() {
        console.log(
            `

+--------------------+--------------------+--------------------+
| ${head[0]}        | ${head[1]}        | ${head[2]}        |
+--------------------+--------------------+--------------------+
| ${column[0][0]}      | ${column[0][1]}   | ${column[0][2]}   |
+--------------------+--------------------+--------------------+
| ${column[1][0]}       | ${column[1][1]}   | ${column[1][2]}   |
+--------------------+--------------------+--------------------+
| ${column[2][0]}       | ${column[2][1]}   | ${column[2][2]}   |
+--------------------+--------------------+--------------------+
    `
        );
    }
    Output1()

}
MyTable();


//🚀 Method 2

const readline = require("readline"); // start project

let InputName;
let InputEmail;
let InputAge;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


function _Input() {

    function name() {
        rl.question("\x1b[33m-- writ your name : \x1b[0m", function (x) {

            // check input
            if (x.toLowerCase() === "exit") {
                console.log("⚠️ App closed");
                rl.close();
                return;
            };

            InputName = x;
            // rl.close(); // for close rl function
            email(); // coll the process function
        });
    };
    function email() {
        rl.question("\x1b[33m-- writ your name : \x1b[0m", function (x) {

            // check input
            if (x.toLowerCase() === "exit") {
                console.log("⚠️ App closed");
                rl.close();
                return;
            };

            InputEmail = x;
            // rl.close(); // for close rl function
            processTable(); // coll the process function
        });
    };
    function age(params) {
        rl.question("\x1b[33m-- writ your name : \x1b[0m", function (x) {

            // check input
            if (x.toLowerCase() === "exit") {
                console.log("⚠️ App closed");
                rl.close();
                return;
            };

            InputAge = x;
            // rl.close(); // for close rl function
            processTable(); // coll the process function
        });
    }

}
// _Input();

function processTable() {
    console.log(`\x1b[44mUser Input is : ${Input} \x1b[0m`); // print user input

    _Input(); // recall input function
}





