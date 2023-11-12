const line = require('fs').readFileSync("dev/stdin", "utf8");
let input = line.toString();
let num = parseInt(input);
let star = new Array(num).fill(' ')

for (let i = num - 1; i >= 0; i--) {
  star[i] = '*';
  console.log(star.join('')); 
}