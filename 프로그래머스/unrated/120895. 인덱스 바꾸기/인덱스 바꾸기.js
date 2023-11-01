function solution(my_string, num1, num2) {
    // const arr = [...my_string]
    // const result = [arr[num1], arr[num2]] = [arr[num2], arr[num1]]
    // return arr.join('')
    
    let result = [...my_string];
    [result[num1] , result[num2]] = [result[num2] , result[num1]];
    return result.join('');
}
