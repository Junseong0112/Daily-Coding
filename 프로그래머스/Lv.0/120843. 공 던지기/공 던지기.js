function solution(numbers, k) {
      let result = 1;
  
  for(let i = 1; i < k; i++){
    result += 2
    if(result > numbers.length){
      result -= numbers.length
    }
  }

  return result
}