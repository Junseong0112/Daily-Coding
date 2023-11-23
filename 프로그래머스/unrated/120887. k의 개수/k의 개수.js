function solution(i, j, k) {
  let s = '';
  for(i; i<= j; i++){
      s += i
  }
  return s.split('').filter((x) => x === String(k)).length
}