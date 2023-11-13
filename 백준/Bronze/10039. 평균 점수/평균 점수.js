const line = require("fs").readFileSync("dev/stdin", "utf8");
let input = line.trim().split('\n').map(Number)

let plusNum = input.map((el) => el < 40 ? 40 : el).reduce((acc, cur) => acc + cur)

console.log(Math.floor(plusNum / input.length))