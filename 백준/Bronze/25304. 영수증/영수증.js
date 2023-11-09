const line = require("fs").readFileSync("dev/stdin", "utf8");
let input = line.trim().split('\n')

let totalPrice = parseInt(input[0])
let totalLength = parseInt(input[1])
let sumPrice = 0;
for(let i = 2; i <= totalLength + 1; i++){
  let num = input[i].split(' ').map(Number)
  sumPrice += num[0] * num[1]
}
console.log(sumPrice === totalPrice ? 'Yes' : 'No')