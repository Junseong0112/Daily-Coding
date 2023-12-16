function solution(intStrs, k, s, l) {
    let newArr = intStrs.map((v) => {
    return v.slice(s)
  })
  return newArr.map((v) => {
    return v.length !== l ? v.substring(0, l) : v
  }).filter(v => Number(v) > k).map(Number)
}