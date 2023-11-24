function solution(array, n) {
    array.sort((a, b) => a - b);
    
    let arr = array.map(el => Math.abs(el - n))
    let value = Math.min(...arr)
    let result = arr.indexOf(value)

    return array[result]
}