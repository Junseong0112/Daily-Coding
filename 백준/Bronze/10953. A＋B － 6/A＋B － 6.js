const line = require("fs").readFileSync("dev/stdin", "utf8");
let input = line.trim().split('\n')
let numLength = parseInt(input[0])
for(let i = 1; i <= numLength; i++){
  console.log(input[i].split(',').reduce((acc, cur) => acc + parseInt(cur), 0))
}