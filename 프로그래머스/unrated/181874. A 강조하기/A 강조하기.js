function solution(myString) {
    return [...myString].map((el) => el === 'a' || el === "A" ? el.toUpperCase() : el.toLowerCase()).join('')
}