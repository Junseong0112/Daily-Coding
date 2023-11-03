function solution(binomial) {
  let result = binomial.split(' ') 
  let [num1, operator ,num2] = result

  if(operator === '+'){return +num1 + +num2}
  if(operator === '-'){return +num1 - +num2}
  if(operator === '*'){return +num1 * +num2}
}