function solution(my_string) {
  let newArr = my_string.split(' ')
  let newNum = parseInt(newArr[0]);

  for(let i = 1; i < newArr.length; i += 2){
    let operator = newArr[i]
    let otherNum = parseInt(newArr[i + 1])

    if(operator === '+'){
      newNum += otherNum
    }else if(operator === '-'){
      newNum -= otherNum
    }
    
  }
  return newNum
}