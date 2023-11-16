function solution(arr) {
    let totalNum = arr.reduce((acc, cur) => acc + cur);
    
    return totalNum / arr.length
}