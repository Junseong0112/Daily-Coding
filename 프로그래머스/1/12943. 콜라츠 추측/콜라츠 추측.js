function solution(num) {
  let n = 0;
  while(num !== 1){
    if(num % 2 === 0){
      num = Math.floor(num / 2);
      n++
    }else{
      num = (num * 3) + 1
      n++
    }
  }
  return n >= 500 ? -1 : n 
}