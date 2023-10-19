function solution(arr, k) {
    return arr.map(function(el){
        if(k % 2 !== 0) return el * k
        else if(k % 2 === 0) return el + k
    })
}