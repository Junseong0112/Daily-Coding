function solution(numbers) {
  let A = [...numbers] 
  let B = [...numbers].sort((a, b) => b - a)
  
  for (let number of numbers){
    if(Math.sign(number) === -1){
      A = numbers.sort((a, b) => a - b)
    }
  }
  return A[0] * A[1] > B[0] * B[1] ? A[0] * A[1] : B[0] * B[1]
}