function solution(A,B){
    const sortedA = A.sort((a, b) => a - b);
  const sortedB = B.sort((a, b) => b - a);

  return sortedA.map((v, i) => v * sortedB[i]).reduce((acc, cur) => acc + cur, 0)
}