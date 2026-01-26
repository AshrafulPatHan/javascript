
// এক ভ্যারিয়েবল ইনপুট (scanf এর মতো)
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function OneNumber() {
    rl.question("Enter a number: ", function (x) {
        console.log("You entered:", x);
        rl.close();
    });
};
// OneNumber();


// 🔹 একাধিক ইনপুট (C এর scanf("%d %d", &a, &b) এর মতো)
function TwoNumber() {
    rl.question("Enter two numbers: ", function (input) {
        let [a, b] = input.split(" ").map(Number);
        console.log("a =", a, "b =", b);
        rl.close();
    });
}
TwoNumber();
