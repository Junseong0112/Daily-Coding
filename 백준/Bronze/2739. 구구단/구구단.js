const line = require("fs").readFileSync("dev/stdin", "utf8");
let input = line.trim()
let num = parseInt(input)

for(let i = 1; i <= 9; i++){
    console.log(`${num} * ${i} = ${num * i}`)
}