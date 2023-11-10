const line = require("fs").readFileSync("dev/stdin", "utf8");
let input = line.trim().split('\n')
let arrNum = input[1].split(' ').map(Number)
let findNum = parseInt(input[2])

console.log(arrNum.filter((el) => el === findNum).length)