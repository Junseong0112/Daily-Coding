function solution(order) {
    let str = String(order)
    return [...str].filter((el) => el === '3' || el === '6' || el === '9').length
}