function solution(arr) {
  let newArr = arr.slice().sort((a, b) => a - b);
  if(arr.length === 1){
    arr.pop()
    arr.push(-1)
    return arr
  }
  return arr.filter((v) => newArr.indexOf(v) !== 0)
}