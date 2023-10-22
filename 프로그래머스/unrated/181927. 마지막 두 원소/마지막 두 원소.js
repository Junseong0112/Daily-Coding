function solution(num_list) {
    let reverse = num_list.reverse();
    
    reverse[0] > reverse[1] ? reverse.unshift(reverse[0] - reverse[1]) : reverse.unshift(reverse[0] * 2)
    
    return reverse.reverse()
}