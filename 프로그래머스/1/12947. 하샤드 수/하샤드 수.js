function solution(x) {
    let hasadNum = String(x).split('').reduce((acc, cur) => acc + parseInt(cur),0)
    return x % hasadNum === 0 ? true : false;
}