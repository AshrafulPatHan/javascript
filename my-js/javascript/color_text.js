const red = '\x1b[31m';
const green = '\x1b[32m';
const reset = '\x1b[0m';

console.log(red + 'This text is red.' + reset);
console.log(green + 'This text is green.' + reset);
console.log('\x1b[33m%s\x1b[0m', 'This text is yellow.'); // Alternative with placeholder
