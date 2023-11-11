const line = require("fs").readFileSync("dev/stdin", "utf8");
let input = line.trim().split('\n')

for(let i = 0; i < input.length - 1; i++){
  console.log(input[i].split(' ').reduce((acc, cur) => acc + parseInt(cur) , 0))
}