const line = require("fs").readFileSync("dev/stdin", "utf8");
let input = line.trim().split('\n')
let numList = input[1].split(' ').map(Number)
console.log(Math.min(...numList) , Math.max(...numList))