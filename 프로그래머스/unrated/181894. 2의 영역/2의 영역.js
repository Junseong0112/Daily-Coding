function solution(arr) {
    let firstIndex = arr.indexOf(2)
  let lastIndex = arr.lastIndexOf(2)
  let result = arr.slice(firstIndex, lastIndex + 1) 
  
  return result.length === 0 ? [-1] : result
}