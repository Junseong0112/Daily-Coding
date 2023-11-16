const line = require("fs").readFileSync("dev/stdin", "utf8");
let input = line.trim().split('\n')
let inputA = parseInt(input[0])
let inputArr = input[1].split(' ').map(Number)
let inputB = input[1].split(' ').map(Number).reduce((acc, cur) => acc + cur)
let highScore = Math.max(...inputArr)

console.log((inputB / highScore * 100) / inputA)