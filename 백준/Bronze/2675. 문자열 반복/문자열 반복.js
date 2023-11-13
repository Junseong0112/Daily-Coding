const line = require("fs").readFileSync("dev/stdin", "utf8");
let input = line.trim().split('\n')
for(let i = 1; i < input.length; i++){
  let newArr = input[i].split(' ')
  let repeatNum = parseInt(newArr[0])
  console.log(newArr[1].split('').map((el) => el.repeat(repeatNum)).join(''))
}