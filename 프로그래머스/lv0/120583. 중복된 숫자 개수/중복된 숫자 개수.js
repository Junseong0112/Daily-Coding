function solution(array, n) {
    var answer = 0;
    answer = array.filter((el) => el === n).length
    return answer;
}