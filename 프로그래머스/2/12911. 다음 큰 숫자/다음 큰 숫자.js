function solution(n) {
    function toStringCalculate (x) {
        return x.toString(2).split('').filter(x => x === '1').length
    }
    
    let nowNumber = toStringCalculate(n)
    
    while(true){
        n++;
        const current = toStringCalculate(n)
        if(nowNumber === current){
            return n
        }
    }
}