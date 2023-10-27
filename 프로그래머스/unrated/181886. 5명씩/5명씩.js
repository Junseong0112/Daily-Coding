function solution(names) {
    return names.map((el, idx) => idx === 0 || idx % 5 === 0 ? el : '').filter(x => x)
}