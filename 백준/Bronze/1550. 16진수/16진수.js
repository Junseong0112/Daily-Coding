const fs = require('fs')
const input = fs.readFileSync("dev/stdin", "utf8").toString().trim()

console.log(parseInt(input, 16))