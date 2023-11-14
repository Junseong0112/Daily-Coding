const line = require("fs").readFileSync("dev/stdin", "utf8");
let input = line.trim().split(' ')
let num = parseInt(input)

let answer = ''

for(let i = 1; i <= num; i++){
  answer += i + '\n'
}
console.log(answer)