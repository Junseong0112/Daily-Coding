const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ')
}).on('close', function () {
    const answer = Array(Number(input)).fill(1).map((el, idx) => idx + el).map(el => el === 10 ? '*'.repeat(el) : String(el).replace(/[1-9]/g, '*'.repeat(el))).join('\n')
    console.log(answer);
});