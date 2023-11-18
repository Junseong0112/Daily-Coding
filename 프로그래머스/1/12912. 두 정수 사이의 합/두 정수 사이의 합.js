function solution(a, b) {
    if(a === b){
      return a
  }
  let newArr = [];
  let highNum = [a, b]
  highNum.sort((a, b) => b - a)
  for(let i = highNum[1]; i <= highNum[0]; i++){
    newArr.push(i)
  }
  return newArr.reduce((acc, cur) => acc + cur)
}