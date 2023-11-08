const line = require("fs").readFileSync("dev/stdin", "utf8");
let input = line.trim().split('\n')

console.log(input[0].charAt(parseInt(input[1] - 1)))
