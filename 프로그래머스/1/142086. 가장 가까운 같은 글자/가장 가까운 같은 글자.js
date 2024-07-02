function solution(s) {
    let lastIndexMap = {};
    let arr = [];
    
    for(let i = 0; i < s.length; i++){
        let char = s[i];
        
        if(lastIndexMap.hasOwnProperty(char)){
            arr.push(i - lastIndexMap[char])
        }else{
            arr.push(-1)
        }
        
        lastIndexMap[char] = i
    }
    
    return arr
}