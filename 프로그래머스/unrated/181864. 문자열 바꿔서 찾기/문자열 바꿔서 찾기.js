function solution(myString, pat) {
    let result = [...myString].map((el) => el === 'A' ? 'B' : 'A').join('')
    return result.includes(pat) ? 1 : 0
}