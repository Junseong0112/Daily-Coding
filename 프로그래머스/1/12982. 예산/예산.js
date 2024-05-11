function solution(d, budget) {
  let sortedD = d.sort((a, b) => a - b);
  let count = 0;
  let total = 0;

  for (let i = 0; i < sortedD.length; i++) {
    total += sortedD[i];
    // 예산을 초과하면 반복 종료
    if (total > budget) {
      break;
    }
    count++;
  }

  return count;
}