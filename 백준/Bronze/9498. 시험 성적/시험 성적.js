const input = require('fs').readFileSync('dev/stdin').toString().split(' ')

const A = parseInt(input)

console.log(A >= 90 ? 'A' : A >= 80 ? 'B' : A >= 70 ? 'C' : A >= 60 ? 'D' : 'F');