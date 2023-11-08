const line = require("fs").readFileSync("dev/stdin", "utf8");
let input = line.trim().split('\n')

const Num = [...input[1]].map(Number).reduce((acc, cur) => acc + cur)

console.log(Num)