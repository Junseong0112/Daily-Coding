const line = require("fs").readFileSync("dev/stdin", "utf8");
let input = line.trim().split(' ')

console.log(input.filter(x => x).length)