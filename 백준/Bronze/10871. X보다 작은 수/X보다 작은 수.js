const line = require("fs").readFileSync("dev/stdin", "utf8");
let input = line.trim().split('\n')
let num = input[0].split(' ').map(Number)[1]
console.log(input[1].split(' ').map(Number).filter((el) => el < num).join(' '))