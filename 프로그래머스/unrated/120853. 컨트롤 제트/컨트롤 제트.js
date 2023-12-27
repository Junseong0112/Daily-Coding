function solution(s) {
    let newArr = s.split(' ')
  
  for(let i = 0; i < newArr.length; i++){
    if(newArr[i] === 'Z'){
      newArr[i] = (-newArr[i - 1])
    }
  }
  
  return newArr.reduce((acc, cur) => acc + parseInt(cur), 0)
}