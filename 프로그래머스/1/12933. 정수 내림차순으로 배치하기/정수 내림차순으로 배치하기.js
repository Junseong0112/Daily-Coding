function solution(n) {
    let newNum = String(n).split('').map(Number).sort((a, b) => b - a).join('');
    
    return parseInt(newNum)
}