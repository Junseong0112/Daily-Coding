function solution(myStr) {
  let result = myStr.split(/[abc]/).filter(x => x)
  return result.length === 0 ? ["EMPTY"] : result
}