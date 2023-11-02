const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let input = [];
rl.on('line', (line) => {    
  input.push(line)
}).on('close', () => {
const A = parseInt(input[0])
const B = parseInt(input[1])

if(A > 0 && B > 0){ console.log(1) }
else if(A < 0 && B > 0){ console.log(2)}
else if(A < 0 && B < 0){ console.log(3)}
else if(A > 0 && B < 0){ console.log(4)}
});