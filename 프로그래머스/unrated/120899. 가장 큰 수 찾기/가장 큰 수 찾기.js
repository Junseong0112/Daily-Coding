function solution(array) {
    let result = []
    let max = Math.max.apply(null, array)
    let idx = 0;
    for(let i = 0; i < array.length; i++){
        if(max === array[i]){
            idx = i
        }
    }
    result = [max, idx]
    return result;
}