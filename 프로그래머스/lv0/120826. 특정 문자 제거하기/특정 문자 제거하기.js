function solution(my_string, letter) {
    let result = ''
    for (let i = 0; i < my_string.length; i++){
        if(my_string.charAt(i) !== letter){
            result += my_string.charAt(i)
        }
    }
    return result
}