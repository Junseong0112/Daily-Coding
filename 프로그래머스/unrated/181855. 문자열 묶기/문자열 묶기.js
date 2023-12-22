function solution(strArr) {
  let newArr = [];
  let count = 1;
  let answer = strArr.sort((a, b) => a.length - b.length).map((v) => v.length)

  for(let i = 0; i < answer.length; i++){
    if(answer[i] === answer[i + 1]){
      count++;
    }else{
      newArr.push(count);
      count = 1;
    }
  }
  return Math.max(...newArr)
}