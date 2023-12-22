function solution(n) {
    return Array(n).fill(0).map((_, idx) => {
        if(idx % 2 === 0){
            return '수'
        }else{
            return '박'
        }
    }).join('')
}