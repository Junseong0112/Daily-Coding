function solution(arr) {
  let result = []
  
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      result.push((arr[i][j] === arr[j][i]) === true ? 1 : 0)
    }
  }

  return result.includes(0) ? 0 : 1
}