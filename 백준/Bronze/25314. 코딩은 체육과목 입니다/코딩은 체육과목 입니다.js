const line = require("fs").readFileSync("dev/stdin", "utf8");
let input = line.trim().split(' ')
let num = parseInt(input)
let answer = ''
for(let i = 4; i <= num; i += 4){
  answer += 'long '
}
console.log(answer + 'int')