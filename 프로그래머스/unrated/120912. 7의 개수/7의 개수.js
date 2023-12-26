function solution(arr) {
  return arr.join('').split('').filter((x) => x === '7').length;
}