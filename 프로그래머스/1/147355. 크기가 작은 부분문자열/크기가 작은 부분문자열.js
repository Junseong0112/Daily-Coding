function solution(t, p) {
  const result = [];
  for (let i = 0; i < t.length - p.length + 1; i++) {
    let substring = t.substring(i, i + p.length);
    result.push(Number(substring));
  }
  return result.filter((x) => x <= Number(p)).length;
}