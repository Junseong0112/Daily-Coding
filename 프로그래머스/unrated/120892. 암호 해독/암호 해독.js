function solution(cipher, code) {
    let result = ''
    for(let i = code - 1; i < cipher.length; i = i + code){
        result += cipher[i];
    }
    return result
    // return [...cipher].filter((el, idx) => (idx + 1) % code === 0).join('')
}