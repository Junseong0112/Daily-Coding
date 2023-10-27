function solution(arr1, arr2) {
  let totalArr1 = arr1.reduce((acc, cur) => acc + cur)
  let totalArr2 = arr2.reduce((acc, cur) => acc + cur)

  if(arr1.length > arr2.length){
    return 1
  }else if(arr1.length < arr2.length){
    return -1
  }else if(arr1.length === arr2.length){
    if(totalArr1 > totalArr2){
      return 1
    }else if(totalArr1 < totalArr2){
      return -1
    }
    return 0
  }
}