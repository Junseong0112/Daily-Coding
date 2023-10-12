function solution(my_string) {
        return [...my_string].map((el) => parseInt(el, 10)).filter((el) => el === el || 0).sort((a,b) => a - b)
}