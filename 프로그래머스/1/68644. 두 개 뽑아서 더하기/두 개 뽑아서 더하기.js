function solution(numbers) {
    const arr = [];
    
    for(let i = 0; i < numbers.length; i++){
        for(let j = 0; j < numbers.length; j++){
            if(i !== j){
            arr.push(numbers[i]+numbers[j])
            }
        }
    }
    
    const sortArr = arr.sort((a,b) => a - b)
    const set = new Set(sortArr)
    return Array.from(set)
}