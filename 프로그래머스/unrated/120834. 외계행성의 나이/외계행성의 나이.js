function solution(age) {
    let newage = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'] 
    return age.toString().split('').map((el, idx) => newage[el]).join('')
}