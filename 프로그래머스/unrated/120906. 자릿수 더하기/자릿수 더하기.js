function solution(n) {
    // spliceNum = (n + '').split('').map(Number)
    // spliceNum = spliceNum.reduce((a,b) => (a + b))
    // return spliceNum
    
    let result = String(n).split('').map(el => Number(el))
    return result.reduce((acc, cur) => acc + cur )
}