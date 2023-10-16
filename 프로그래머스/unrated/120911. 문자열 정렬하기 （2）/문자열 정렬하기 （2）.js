function solution(my_string) {
    return [...my_string].map((el) => el.toLowerCase()).sort().join('')
}