const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const sortNum = input.map(Number).sort((a, b) => a - b);
const xNum = Array(30)
  .fill(1)
  .map((v, i) => v + i);

let result = xNum.filter((x) => !sortNum.includes(x));

console.log(result.join("\n"));