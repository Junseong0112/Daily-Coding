function solution(arr1, arr2) {
  let doubleArr = []
  for(let i = 0; i < arr1.length; i++){
    let newArr = []
    for(let j = 0; j < arr1[i].length; j++){
        newArr.push(arr1[i][j] + arr2[i][j])
    }
    doubleArr.push(newArr)
  }
  return doubleArr
}