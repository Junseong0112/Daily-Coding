function solution(strArr) {
    return strArr.map(function(el, idx){
        if(idx % 2 !== 0) return el.toUpperCase()               
        else return el.toLowerCase()
    })
}