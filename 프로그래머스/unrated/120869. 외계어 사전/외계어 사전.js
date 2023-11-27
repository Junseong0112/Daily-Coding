function solution(spell, dic) {
    
    // 주소값을 기점으로 동등연산자를 사용하기에 같은 배열에 같은 문자열이 속해있어도 같지 않을 수 있다
    // 따라서 toString()을 이용하여 배열을 문자열로 반환하여 결과값을 같게 만든다.
  return dic.some((v) => [...v].sort().toString() === [...spell].sort().toString()) ? 1 : 2;
}