function solution(s1, s2) {
  let array = s1.filter((x) => s2.includes(x))
  return array.length
}