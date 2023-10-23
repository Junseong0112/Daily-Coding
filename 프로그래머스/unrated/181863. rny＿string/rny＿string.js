function solution(rny_string) {
    return [...rny_string].map((el) => el === 'm' ? 'rn' : el).join('')
}