// const line = require("fs").readFileSync("/dev/stdin", "utf8");
const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const price = input[0].split(" ").map(Number);
const onePrice = price[0];
const twoPrice = price[1];
const threePrice = price[2];

let arr = [];

for (let i = 1; i < input.length; i++) {
  let num = input[i].split(" ").map(Number);
  for (let i = num[0]; i < num[1]; i++) {
    arr.push(i);
  }
}
let sortArr = arr.sort((a, b) => a - b);
let countArr = [];
let count = 1;

for (let i = 0; i < sortArr.length; i++) {
  if (sortArr[i] == sortArr[i + 1]) {
    count++;
  } else {
    countArr.push(count);
    count = 1;
  }
}
let totalPrice = 0;

for (let i = 0; i < countArr.length; i++) {
  if (countArr[i] === 1) {
    totalPrice += onePrice;
  } else if (countArr[i] === 2) {
    totalPrice = totalPrice + twoPrice * 2;
  } else if (countArr[i] === 3) {
    totalPrice = totalPrice + threePrice * 3;
  }
}

console.log(totalPrice);
