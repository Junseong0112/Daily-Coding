function solution(s) {
    return [...s].filter((el) => s.split(el).length === 2).sort().join('')
    // return [...s].filter(el => s.match(new RegExp(el, 'g')).length === 1).sort().join('')
}