function factorial(n) {
  let result = 1;

  if (n === 0 || n === 1) {
    return 1;
  }
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function solution(balls, share) {
  const ballsFactorial = factorial(balls);
  const shareFactorial = factorial(share);
  const ballShareFactorial = factorial(balls - share);

  return Math.round(ballsFactorial / (ballShareFactorial * shareFactorial));
}

console.log(solution(3, 2));
console.log(solution(5, 3));
