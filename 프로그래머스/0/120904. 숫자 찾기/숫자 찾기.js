function solution(num, k) {
    let result = String(num)
    
    result = [...result].map((el) => Number(el)).findIndex((el) => el === k)
    
    if(result !== -1){
        result += 1
    }
    return result
}