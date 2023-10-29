const input = require('fs').readFileSync('dev/stdin').toString().split('\n');

const A = input[0]
const B = input[1].split('')

console.log(A * B[2])
console.log(A * B[1])
console.log(A * B[0])
console.log(A * input[1])

