function solution(my_string) {
  let newArr = []

  for(let i = 1; i <= my_string.length; i++){
    newArr.push(my_string.slice(-i))
  }
  return newArr.sort()
}