function solution(n) {
  let three = n.toString(3);
  three = [...three].reverse().join("");
  return parseInt(three, 3);
}