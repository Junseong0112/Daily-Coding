const line = require("fs").readFileSync("dev/stdin", "utf8");
let input = line.trim().split('\n')

for(let i = 0; i < input.length - 1; i++ ){
  let arrNum = input[i].split(' ').map(Number) 
  console.log(arrNum[0] > arrNum[1] ? 'Yes' : 'No')
}