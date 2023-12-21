function solution(a, b) {
  let newArr= [];

  for(let i = 0; i < a.length; i++){
    newArr.push(a[i] * b[i])
  }
  
  return newArr.reduce((acc, cur) => acc + cur)
}