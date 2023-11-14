const line = require("fs").readFileSync("dev/stdin", "utf8");
let input = line.trim().split(' ')
let num = parseInt(input)

for(let i = 1; i <= num; i++){
  console.log(`Hello World, Judge ${i}!`)
}