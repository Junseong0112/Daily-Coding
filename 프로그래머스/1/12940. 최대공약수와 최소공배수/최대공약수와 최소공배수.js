function solution(n, m) {
  let smallNum = Math.min(n, m);
  let bigNum = Math.max(n, m);

  while (bigNum != 0) {
    // 3 3
    let temp = smallNum;
    // 12 3
    smallNum = bigNum;
    // 3 0
    bigNum = temp % bigNum;
  }
  const GCD = smallNum;
  const LCM = (n * m) / GCD;

  return [GCD, LCM];
}