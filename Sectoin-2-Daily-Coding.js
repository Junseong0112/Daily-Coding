// Daily Coding

function computeWhenDouble(interestRate) {
  // 연이율
  let rate = 1 + interestRate / 100;
  // 원금
  let principal = 1;
  // 기간
  let year = 0;
  // 원금이 2배 이상이 될때까지 반복
  for (i = 0; principal < 2; i++){
    // 원금은 원금 * 연이율을 곱해준다
    principal = principal * rate;
    // 반복문이 지날때 마다 기간은 1씩 늘어난다.
    year++
  }
  return year;
}

function powerOfTwo(num) {
  // TODO: 여기에 코드를 작성합니다.
  // 만약 num이 1이면 true를 리턴해라
  if(num === 1){
    return true;
  }
  // 비교 대상을 변수에
  let power = 2;
  // power 가 num 보다 작을때까지 
  while(power < num){
    // power는 곱하기 2를 계속해서 한다.
    power *= 2;
  }
  // 반복문을 돌린 power 값과 매개변수인 num이 같은지에 대한 값을 리턴해라.
  return power === num;
}

function firstCharacter(str) {
  // TODO: 여기에 코드를 작성합니다.
  // 빈 문자열을 변수에 저장
  let string = '';
  // 매개변수의 문자열을 공백기준으로 나누어서 저장
  let firstStr = str.split(' ');
  // 만약 매개변수에 빈 문자열을 입력받은 경우, 빈 문자열로 리턴
  if(str === ''){
    return '';
  }
  // 배열에 값들을 문자열로 나열
  for(let i of firstStr){
    // string은 꺼내온 값들의 문자열 첫번째 단어들을 계속 더해준다
    string += i[0];
  }
  // 그 값을 리턴한다.
  return string
}

function firstReverse(str) {
  //  문자열을 배열로 쪼개고 반대로 바꾸고 이어붙인다.
  // let firstString = str.split('').reverse().join('');
  // return firstString

  // 다른방법
  // 빈문자열을 변수로 저장
  let reversed = '';
  // str 길이의 뒤부터 i가 0보다 크거나 같을때까지 i를 계속 감소시킨다.
  for(let i = str.length - 1; i >= 0; i--) {
    // 그 값들을 reversed를 저장한다.
    reversed = reversed + str[i];
  }
  // reversed를 반환한다
  return reversed;
  
}

function letterCapitalize(str) {

  // 공백을 구분자?로 해서 각 글자를 구분
  // 각 글자의 첫글자를 대문자로 문자열 리턴
  // charAt() 과 slice 이용? toUpperCase? split?
  if(str.length===0){ // 빈 문자열 입력시 빈 문자열 리턴
  return '';
  }

  let temp=str.split(' '); // 공백(' ')을 구분자로 하여 단어를 배열에 넣는다
  let tempStr=''; // 첫글자 대문자 변환을 위한 임시 변수 선언

  for(let i=0;i<temp.length;i++){
  if(temp[i]!==''){ // 연속된 공백의 경우 그대로 공백을 출력하고 아닌 경우에 대문자 변환 실행
  tempStr=temp[i][0].toUpperCase()+temp[i].slice(1); // 배열의 첫글자(string)만 대문자 변환 후 첫글자만 자른 나머지 부분을 합침
  temp[i]=tempStr; // 다시 배열에 그 값을 할당
  }
  }
  return temp.join(' '); // 배열을 공백을 구분자로 하여 문자열화 리턴
}

function convertListToObject(arr) {
  let result = {}; // 빈 객체 생성
  
  for (let i = 0; i < arr.length; i++) { // 배열의 각 요소에 대해 반복문 실행
    const subArr = arr[i]; // 현재 요소를 subArr 변수에 할당
    
    if (subArr.length === 2) { // subArr의 길이가 2인 경우에만 실행
      const key = subArr[0]; // subArr의 첫 번째 요소를 키로 설정
      const value = subArr[1]; // subArr의 두 번째 요소를 값으로 설정
      
      // 중복되는 키는 초기의 값을 사용합니다.
      if (!(key in result)) { // 키가 이미 결과 객체에 존재하지 않는 경우에만 실행
        result[key] = value; // 결과 객체에 키와 값을 추가
      }
    }
  }

  return result; // 결과 객체 반환
}

// 두칸 공백 한칸 공백으로 변환하기
function convertDoubleSpaceToSingle(str) {
  // 두칸 공백을 붙여서 한칸 공백으로 조인한다.
  return str.split('  ').join(' ');
}

// 특정문자 제거하기 1

function solution(my_string, letter) {
  // 빈 문자열 변수로 저장
  let result = ''
  // 각 문자열을 돌려보며 letter에 해당되지 않는 문자열만 추가한다.
  for (let i = 0; i < my_string.length; i++){
      if(my_string.charAt(i) !== letter){
          result += my_string.charAt(i)
      }
  }
  // 결과 값을 리턴한다.
  return result
}

// 특정문자 제거하기 2
function solution(my_string, letter){
  const result = my_string.replaceAll(letter, "");
  return result
}

// 특정문자 제거하기 3
function solution(my_string, letter){
  const result = my_string.split(letter).join('');
  return result
}

// 연속된 한자리 홀수숫자에 "-" 추가하기
function insertDash(str) {
  let result = "";
  
  for(let i = 0; i < str.length; i++){
    // 현재 문자가 홀수인지 확인
    if(str[i] % 2 !== 0){
      // 이전 문자도 홀수인 경우 '-' 추가
      if(i > 0 && str[i - 1] % 2 !== 0){
        result += "-";
      }
    }
    result += str[i]
  }
  return result
}

// 문자열을 요소로 갖는 배열을 입력받아 가장 짧은 문자열과 가장 긴 문자열을 제거해야한다
function removeExtremes(arr) {
  let shortestLen = 20; // 가장 짧은 문자열의 길이를 저장할 변수, 초기값을 충분히 큰 값으로 설정
  let longestLen = 0; // 가장 긴 문자열의 길이를 저장할 변수, 초기값을 0으로 설정
  let shortestIdx = 0; // 가장 짧은 문자열의 인덱스를 저장할 변수
  let longestIdx = 0; // 가장 긴 문자열의 인덱스를 저장할 변수
  for (let i = 0; i < arr.length; i++) {
    // 배열 순회
    if (arr[i].length >= longestLen) {
      // 현재 문자열의 길이가 longestLen보다 크거나 같으면
      longestLen = arr[i].length; // longestLen을 현재 문자열의 길이로 업데이트
      longestIdx = i; // longestIdx를 현재 인덱스로 업데이트
    }

    if (arr[i].length <= shortestLen) {
      // 현재 문자열의 길이가 shortestLen보다 작거나 같으면
      shortestLen = arr[i].length; // shortestLen을 현재 문자열의 길이로 업데이트
      shortestIdx = i; // shortestIdx를 현재 인덱스로 업데이트
    }
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    // 배열 순회
    if (i !== shortestIdx && i !== longestIdx) {
      // 현재 인덱스가 shortestIdx와 longestIdx와 같지 않으면
      result.push(arr[i]); // result 배열에 현재 요소를 추가
    }
  }

  return result; // 결과 배열 반환
}

