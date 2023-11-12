const line = require("fs").readFileSync("dev/stdin", "utf8");
let input = line.trim().split('\n').map(Number)
console.log(input[0] + input[1])
