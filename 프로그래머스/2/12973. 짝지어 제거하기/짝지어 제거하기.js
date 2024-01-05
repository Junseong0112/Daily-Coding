function solution (s) {
    let newArr = [];
    
    for (let el of s){
        if(newArr.length === 0 || newArr[newArr.length - 1] !== el){
            newArr.push(el)
        }else{
            newArr.pop()
        }
    }
    
    return newArr.length === 0 ? 1 : 0;
}