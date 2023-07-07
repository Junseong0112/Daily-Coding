// 프로그래머스

// 양꼬치문제
function solution(yang , drink) {
  return 12000 * yang + 2000 * drink - 2000 * Math.floor(yang/10);
}

// n의 배수
function solution(num, n) {
  return (num % n === 0) ? 1 : 0;
}

// 배열 두배만들기
function solution(numbers) {
  let arr = [];
  for(let i of numbers){
      arr.push(i * 2)
  }
  return arr
}

// 배열 뒤집기
function solution(num_list) {
  return num_list.reverse();
}

// 문자열의 앞의 n글자
function solution(my_string, n) {
  return my_string.slice(0, n)
}

// 문자 리스트를 문자열로 변환하기 
function solution(arr) {
  return arr.join('')
}

// 공배수
function solution(number, n, m) {
  if(number % n === 0 && number % m === 0){
      return 1;
  }else{
      return 0;
  }
}

// 원소들의 곱과 합
function solution(num_list) {
      let jegob = num_list.reduce((a,b) => a+b,0)
      jegob = jegob * jegob

      let gobsem = num_list.reduce((a,b) => a * b,1);

      if(gobsem < jegob){
        return 1;
      }
      return 0;
}

// n번째 원소까지
function solution(num_list, n) {
  return num_list.slice(0, n);
}

// 편지
function solution(message) {
  return message.length * 2
}