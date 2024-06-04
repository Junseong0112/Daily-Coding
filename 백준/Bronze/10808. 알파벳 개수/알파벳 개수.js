const fs = require("fs");
const input = fs.readFileSync("dev/stdin", "utf8").toString().trim();

let abc = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97));
let arr = Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  arr[abc.indexOf(input[i])]++;
}
console.log(arr.join(" "));