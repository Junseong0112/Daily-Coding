function solution(my_string, num1, num2) {
    const arr = [...my_string]
    const result = [arr[num1], arr[num2]] = [arr[num2], arr[num1]]
    return arr.join('')
}