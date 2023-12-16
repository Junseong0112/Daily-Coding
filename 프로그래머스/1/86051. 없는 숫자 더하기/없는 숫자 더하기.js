function solution(numbers) {
    const newNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  numbers.sort((a, b) => a - b);

  return newNum.filter((v) => {
    for(let i = 0; i < newNum.length; i++){
      if(numbers[i] === v){
        return false
      }
    }
    return v
  }).reduce((acc, cur) => acc + cur)
}