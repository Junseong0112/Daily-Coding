const line = require("fs").readFileSync("dev/stdin", "utf8");
let input = line.trim().split(' ')
let answer = input.map(Number).reduce((acc,cur) => acc + cur);
console.log(answer)