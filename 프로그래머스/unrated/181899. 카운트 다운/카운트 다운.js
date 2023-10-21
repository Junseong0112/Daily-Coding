function solution(start, end) {
    let arr = []
    for(let i = 0; i <= start; i++){
        if(i >= end){
            arr.push(i)
        }
    }
    return arr.sort((a,b) => b - a);
}