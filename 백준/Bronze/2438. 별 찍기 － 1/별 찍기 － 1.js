const line = require("fs").readFileSync("dev/stdin", "utf8");
let input = line.toString()

for(let i = 1; i <= input; i++){
  console.log('*'.repeat(i))
}