function solution(x, n) {
  let newArr = [];
  let newNum = 0;
  for(let i = 0; i < n; i++){
    newNum += x
    newArr.push(newNum)
  }
  return newArr
}