function solution(arr, divisor) {
arr.sort((a, b) => a - b)
  let answer = arr.filter(v => v % divisor === 0);
  return answer.length === 0 ? [-1] : answer
}