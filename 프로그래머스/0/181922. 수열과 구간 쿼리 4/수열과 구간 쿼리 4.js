function solution(arr, queries) {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < queries.length; j++){
            const [s, e, k] = queries[j];
            if(s <= i && i <= e){
                if(i % k === 0){
                    arr[i]++;
                }
            }
        }
    }
    
    return arr
}