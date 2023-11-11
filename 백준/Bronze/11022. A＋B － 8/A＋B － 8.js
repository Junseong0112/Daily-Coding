const line = require("fs").readFileSync("dev/stdin", "utf8");
let input = line.trim().split('\n')
let numLength = parseInt(input[0])
let answer = ''

for(let i = 1; i <= numLength; i++){
  let tmp = input[i].split(' ')
  answer += `Case #${i}: `+ `${tmp[0]} + ${tmp[1]} = ${tmp.reduce((acc, cur) => acc + parseInt(cur), 0)}` + "\n"
}

console.log(answer)