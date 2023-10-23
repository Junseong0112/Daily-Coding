function solution(n) {
    let result = 0;
    if(n % 2 !== 0){
        for(let i = 1; i <= n; i+=2) 
            result += i;
    }else{ 
        for(let i = 2; i <= n; i+=2) 
            result += Math.pow(i,2);
    }
    return result;
}

//  런타임 오류..
//     let result = [];
//     for(let i = 1; i <= n; i++){
//         result.push(i)
//     }
//     let odd = result.filter(el => el % 2 !== 0).reduce((acc, cur) => acc + cur)
//     let even = result.filter(el => el % 2 === 0).map(el => Math.pow(el, 2)).reduce((acc, cur) => acc + cur)
    
//     return n % 2 === 0 ? even : odd