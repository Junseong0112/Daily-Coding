const fs = require('fs')
const input = fs.readFileSync("dev/stdin", "utf8").toString().trim().split(' ')
const sortArr = input.sort((a, b) => a - b).join(' ')

console.log(sortArr)