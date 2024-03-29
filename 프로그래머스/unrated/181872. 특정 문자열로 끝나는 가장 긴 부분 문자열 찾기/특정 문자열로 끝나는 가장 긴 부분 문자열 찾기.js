function solution(myString, pat) {
    // 정규식 패턴 생성 : pat으로 끝나느 패턴을 찾는다
    const regex = new RegExp(`.*${pat}(?=.*)`);
    // 정규식 매칭을 통해 myString에서 해당 패턴을 찾는다.
    const result = myString.match(regex);
    // 결과값이 존재하면 해당 패턴을 반환하고, 없으면 빈 문자열을 반환한다.
    return result ? result[0] : ''
    
    // 다른 사람 풀이 : 
    // subString : 문자열을 시작점과 끝으로 잘라 새로운 문자열을 반환
    // return myString.substring(0, myString.lastIndexOf(pat) + pat.length);
}