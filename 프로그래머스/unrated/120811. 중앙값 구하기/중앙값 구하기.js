function solution(array) {
    let result = array.sort((a, b) => b - a)
    return result[Math.trunc(array.length / 2)]
}