function solution(my_string, s, e) {
      let sliceStr = my_string.slice(s, e + 1).split('').reverse().join('');
  
  return my_string.slice(0, s) + sliceStr + my_string.slice(e + 1, my_string.length)
    
}