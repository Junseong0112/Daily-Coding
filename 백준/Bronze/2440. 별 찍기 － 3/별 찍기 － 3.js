const line = require("fs").readFileSync("dev/stdin", "utf8");
let input = parseInt(line.trim())

for(let i = input; i >= 1; i--){
  console.log('*'.repeat(i))
}