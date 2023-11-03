function solution(numbers, direction) {
  if(direction === "left"){
      let firstNum = numbers.shift();
      numbers.push(firstNum);
      return numbers;
  }
  if(direction === 'right'){
    let lastNum = numbers.pop();
    numbers.unshift(lastNum)
    return numbers
  }
}