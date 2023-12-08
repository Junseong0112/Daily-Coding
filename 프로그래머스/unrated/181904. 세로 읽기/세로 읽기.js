function solution(my_string, m, c) {
    let answer = [];
  let num = 0;

  for(let i = 0; i < my_string.length; i += m){
    num = i + m;  
    answer.push(my_string.slice(i, num))
  }
  return answer.map((v) => v.charAt(c - 1)).join('')
}