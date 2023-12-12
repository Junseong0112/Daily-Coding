function solution(num_list) {
    let newArr = [];
    
    num_list.forEach((v) => {
        let num = 0;
        while(v !== 1){
            if(v % 2 === 0){
                v = Math.floor(v / 2)
                num++
            }else{
                v = Math.floor((v - 1) / 2)
                num++
            } 
        }
        newArr.push(num)
    })
    
    return newArr.reduce((acc, cur) => acc + cur)
}