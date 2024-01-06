function solution(n) {
    let newArr = [];
    let divisor = 2; 
    
    while(n >= 2){
        if(n % divisor === 0){
            newArr.push(divisor);
            n = n / divisor;
        }else{
            divisor++
        }
    }
    
    const newSetArr = new Set(newArr)
    return [...newSetArr]
}