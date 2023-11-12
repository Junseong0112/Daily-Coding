function solution(numLog) {
    let newStr = ''
    for(let i = 1; i < numLog.length; i++){
        if(numLog[i] - numLog[i - 1] === 1) newStr += 'w';
        else if(numLog[i] - numLog[i - 1] === -1) newStr += 's';
        else if(numLog[i] - numLog[i - 1] === 10) newStr += 'd';
        else newStr += 'a'
    }
    return newStr
}