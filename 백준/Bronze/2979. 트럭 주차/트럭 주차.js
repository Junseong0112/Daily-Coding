const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const [A, B, C] = input[0].split(" ").map(Number);

let timeSlots = new Array(100).fill(0);

for (let i = 1; i < input.length; i++) {
  let [start, end] = input[i].split(" ").map(Number);
  for (let j = start; j < end; j++) {
    timeSlots[j]++;
  }
}

let totalPrice = 0;

for (let i = 0; i < timeSlots.length; i++) {
  if (timeSlots[i] === 1) {
    totalPrice += A;
  } else if (timeSlots[i] === 2) {
    totalPrice += B * 2;
  } else if (timeSlots[i] === 3) {
    totalPrice += C * 3;
  }
}

console.log(totalPrice);
