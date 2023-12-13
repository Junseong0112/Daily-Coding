function solution(arr, queries) {
    queries.forEach(v => {
        const [start, end] = v;
        
        for(let i = start; i <= end; i++){
            arr[i]++
        }
    })
    
    return arr
}