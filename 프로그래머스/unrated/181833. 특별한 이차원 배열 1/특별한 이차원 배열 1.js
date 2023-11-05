function solution(n) {
  let newArr = [];
  let result = [];

  for(let i = 1; i <=n; i++){
    for(let j = 1; j <= n; j++){
      newArr.push(i === j ? 1 : 0)
    }
  }
  for(let i = 0; i < newArr.length; i+=n){
    result.push(newArr.slice(i, i + n))
  }
  
  return result
}