function solution(s){
  let p = s.toLowerCase().split('').filter((x) => x === 'p').length;
  let y = s.toLowerCase().split('').filter((x) => x === 'y').length;

  return p === y
}