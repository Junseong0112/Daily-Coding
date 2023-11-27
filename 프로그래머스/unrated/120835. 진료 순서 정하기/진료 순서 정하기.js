function solution(emergency) {
    let answer = emergency.slice().sort((a, b) => b - a);
    return emergency.map(el => answer.indexOf(el) + 1);
}