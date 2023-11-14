const line = require("fs").readFileSync("dev/stdin", "utf8");
let input = line.trim().split(' ')
let num = parseInt(input)

let answer = ''

for(let i = num; i >= 1; i--){
  answer += i + '\n'
}
console.log(answer)