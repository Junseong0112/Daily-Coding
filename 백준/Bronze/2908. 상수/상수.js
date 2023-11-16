const line = require("fs").readFileSync("dev/stdin", "utf8");
let input = line.trim().split(' ')

let inputA = input[0].split('').reverse().join('')
let inputB = input[1].split('').reverse().join('')

console.log(Math.max(inputA, inputB))