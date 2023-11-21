function solution(arr, flag) {
  let answer = []
  flag.map((el, idx) => {
    if(el){
      for(let i = 0; i < arr[idx] * 2; i++){
        answer.push(arr[idx])
      }
    }else{
      for(let i = 0; i < arr[idx]; i++){
        answer.pop()
      }
    }
  })
  return answer
}