const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .toLowerCase();

const result = [];

for (const char of input) {
  let found = false;
  for (const group of result) {
    if (group[0] === char) {
      group.push(char);
      found = true;
      break;
    }
  }

  if (!found) {
    result.push([char]);
  }
}
let max = result.map((v) => v.length);
let maxCount = Math.max(...max);
let bigResult = result.filter((x) => x.length === maxCount);

if (bigResult.length > 1) {
  console.log("?");
} else {
  console.log(bigResult.flat()[0].toUpperCase());
}