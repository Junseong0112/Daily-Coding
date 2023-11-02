function solution(rny_string) {
    // return [...rny_string].map((el) => el === 'm' ? 'rn' : el).join('')
    // return rny_string.replaceAll('m', 'rn')
    return rny_string.replace(/m/g, 'rn')
}