const line = require("fs").readFileSync("dev/stdin", "utf8");
let input = line.trim()
let num = parseInt(input)

let result = 0
for(let i = 1; i <= num; i++){
    result += i
}
console.log(result)