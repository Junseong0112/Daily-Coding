function solution(array, height) {
    var answer = array.filter((x) => x > height);
    return answer.length;
}