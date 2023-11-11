const line = require("fs").readFileSync("dev/stdin", "utf8");
let input = line.trim().split('\n')
let numLength = parseInt(input[0])
let answer = ''

for(let i = 1; i <= numLength; i++){
  let tmp = input[i].split(' ')
  answer += parseInt(tmp[0]) + parseInt(tmp[1]) + "\n"
}

console.log(answer)