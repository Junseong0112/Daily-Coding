function solution(arr, divisor) {
    arr.sort((a, b) => a - b)
  let answer = arr.filter((v) => {
    return v % divisor === 0 
  })
  if(answer.length === 0){
    return [-1]
  }else{
    return answer
  }
}