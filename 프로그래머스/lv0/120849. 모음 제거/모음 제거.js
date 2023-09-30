function solution(my_string) {
    let str = 'aeiou'
    return my_string.split('').filter((el) => (!str.includes(el))).join('')
}