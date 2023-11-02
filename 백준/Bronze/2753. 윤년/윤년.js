const input = require('fs').readFileSync('dev/stdin').toString().split(' ')

const A = parseInt(input)

console.log(A % 4 === 0 && A % 100 !== 0 || A % 400 === 0 ? 1 : 0);