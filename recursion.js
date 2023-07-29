// 1.수(num)를 입력받아 1부터 num까지의 합을 리턴해야 합니다.
function sumTo(num) {
  // base case : 문제가 더이상 쪼개지지않는 순간
  if(num <= 1) return num
  
  // recursive case : 문제를 동일한 방식으로 쪼개나가는 방법
  return sumTo(num - 1) + num
}

// 2.수를 입력받아 홀수인지 여부를 리턴해야 합니다.
function isOdd(num) {
  // Base case : 0은 홀수가 아님
  if(num === 0){
    return false
  }
  // Base case : 1은 홀수가 맞음
  if(num === 1){
    return true
  }
  // Recursive case: 음수인 경우 양수로 변환하여 재귀 호출
  if(num < 0){
    return isOdd(-num)
  }
  // Recursive case: num에서 2를 뺀 값에 대해 재귀 호출
  return isOdd(num - 2)
}

// 3.수를 입력받아 n-factorial(n!; 엔-팩토리얼) 값을 리턴해야 합니다.
// n! 은 1부터 n까지 1씩 증가한 모든 값의 곱입니다.
function factorial(num) {
  // Basecase: 0! 또는 1!은 1로 정의된다. 
  if(num === 0 || num === 1){
    return 1;
  }
  // Recursive case : n!은 
  return num * factorial(num - 1)
}

// 4.수(num)를 입력받아 피보나치 수열의 num번째 요소를 리턴해야 합니다.
function fibonacci(num) {
  // base case: num이 0 또는 1인 경우, 해당 숫자를 반환
  if(num <= 1){
    return num
  }
  // recursive case : num - 1번째와 num - 2번째 피보나치 수의 합을 반환
  return fibonacci(num - 1) + fibonacci(num - 2)
}

// 5.배열을 입력받아 모든 요소의 합을 리턴해야 합니다.
function arrSum(arr) {
  if (arr.length === 0) {
    return 0;
  }

  // const [head, ...tail] = arr;
  const head = arr[0];
  const tail = arr.slice(1);
  return head + arrSum(tail);
}

// 6.배열을 입력받아 모든 요소의 곱을 리턴해야 합니다.
function arrProduct(arr) {
  if (arr.length === 0) {
    return 1;
  }

  // const [head, ...tail] = arr;
  const head = arr[0];
  const tail = arr.slice(1);
  return head * arrProduct(tail);
}


