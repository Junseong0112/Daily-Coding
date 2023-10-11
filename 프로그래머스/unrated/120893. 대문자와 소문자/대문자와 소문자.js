function solution(my_string) {
  let str = []
  for(let el of my_string){
    if (el === el.toUpperCase()){
      str.push(el.toLowerCase());
    }else{
      str.push(el.toUpperCase())
    }
  }
  return str.join('')
}