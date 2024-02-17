function solution(l, r) {
  let result = [];

  for (let i = l; i <= r; i ++) {
    if (isSpecialNumber(i)) {
      result.push(i);
    }
  }

  return result.length > 0 ? result : [-1];
}

function isSpecialNumber(num) {
  while (num > 0) {
    let digit = num % 10;
    if (digit !== 0 && digit !== 5) {
      return false;
    }
    num = Math.floor(num / 10);
  }
  return true;
}