function solution(n) {
    spliceNum = (n + '').split('').map(Number)
    spliceNum = spliceNum.reduce((a,b) => (a + b))
    return spliceNum
}