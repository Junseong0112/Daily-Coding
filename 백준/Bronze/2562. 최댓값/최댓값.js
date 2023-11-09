const line = require("fs").readFileSync("dev/stdin", "utf8");
let input = line.trim().split('\n')
let bigNum = Math.max(...input) 
let NumLength = input.map(Number)

console.log(bigNum)
console.log(NumLength.indexOf(bigNum) + 1)