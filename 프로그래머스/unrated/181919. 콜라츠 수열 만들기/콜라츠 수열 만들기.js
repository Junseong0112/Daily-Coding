function solution(n) {
let newArr =[]
  newArr.unshift(n)
  for (let i = 1; i <= 1000; i++){
    if(n % 2 === 0){
      newArr.push(n / 2);
      n = n / 2; 
    }
    else if(n % 2 !== 0){
      newArr.push(3 * n + 1);
      n = 3 * n + 1;
    }
    if(n === 1){
      break;
    }
  }
  return newArr
}