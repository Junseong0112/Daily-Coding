function solution(rank, attendance) {
  let ranking = rank
    .filter((_, i) => attendance[i])
    .sort((a, b) => a - b)
    .slice(0, 3);
  let rankingNumber = ranking.map((v) => rank.indexOf(v));
  return 10000 * rankingNumber[0] + 100 * rankingNumber[1] + rankingNumber[2];
}