function solution(s) {
  const regex = /[a-z]/gi
  if(s.length === 4 || s.length === 6){
    return regex.test(s) ? false : true
  }
  
  return false
}