function solution(absolutes, signs) {
  let minesNum = absolutes.filter((el, idx) => !signs[idx]).map((el) => el * -1).reduce((acc, cur) => acc + cur)
  let plusNum = absolutes.filter((el, idx) => signs[idx]).reduce((acc, cur) => acc + cur)
  
  return minesNum + plusNum
}