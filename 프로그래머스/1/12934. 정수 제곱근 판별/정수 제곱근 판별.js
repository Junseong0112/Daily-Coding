function solution(n) {
    for(let i = 0; i <= n; i++){
        if(i ** 2 === n){
            return Math.pow((i + 1), 2)
        }
    }
    return -1
}