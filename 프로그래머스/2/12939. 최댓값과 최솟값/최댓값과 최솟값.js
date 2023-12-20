function solution(s) {
  const newNum = s.split(' ').map(Number)
  const max = Math.max(...newNum)
  const min = Math.min(...newNum)
  return `${min} ${max}`
}