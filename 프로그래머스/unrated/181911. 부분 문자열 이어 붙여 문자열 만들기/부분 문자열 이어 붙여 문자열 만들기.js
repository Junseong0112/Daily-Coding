function solution(my_strings, parts) {
  let result = ''
  
  for (let i = 0; i < my_strings.length; i++){
    for(let j = 0; j < parts.length; j++){
      if(i === j){
        result += my_strings[i].slice(parts[j][0], parts[j][1] + 1)
      }
    }
  }
  return result
}