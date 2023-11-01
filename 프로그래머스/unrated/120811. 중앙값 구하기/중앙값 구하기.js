function solution(array) {
    let result = array.sort((a, b) => b - a)
    return result[Math.floor(array.length / 2)]
}