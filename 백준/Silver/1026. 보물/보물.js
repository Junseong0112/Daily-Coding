const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const number = parseInt(input[0]);

const A = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const B = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);
let num = 0;

for (let i = 0; i < number; i++) {
  num += A[i] * B[i];
}

console.log(num);