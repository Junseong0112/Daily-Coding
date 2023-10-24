function solution(n, k) {
    let result = Array(n).fill(n).map((el, idx) => idx + 1).filter((el) => el % k === 0)

    return result
}