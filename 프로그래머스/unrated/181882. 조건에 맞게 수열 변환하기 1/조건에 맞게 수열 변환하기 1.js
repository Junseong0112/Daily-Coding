function solution(arr) {
    return arr.map(function(el){
        if(el >= 50 && el % 2 === 0){
            return el / 2
        }else if(el < 50 && el % 2 !== 0){
            return el * 2
        }
        return el
    })
}