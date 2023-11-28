function solution(score) {
    let totalScore = score.map((v) => v[0] + v[1])
    let newArr = totalScore.slice().sort((a, b) => b - a);
    
    return totalScore.map((v) => newArr.indexOf(v) + 1)
}  