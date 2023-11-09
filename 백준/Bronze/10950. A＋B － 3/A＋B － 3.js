const line = require("fs").readFileSync("dev/stdin", "utf8");
let input = line.trim().split('\n')

let lengthInput = parseInt(input[0])
for(let i = 1; i <= lengthInput; i++){
  console.log(input[i].split(' ').reduce((acc, cur) => acc + Number(cur),0))
}