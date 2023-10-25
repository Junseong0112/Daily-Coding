function solution(arr) {
    let newArr = []
    arr.map(function(el){
        for(let i = 1; i <= el; i++ ){
            newArr.push(el)
        }
    })
    return newArr
}