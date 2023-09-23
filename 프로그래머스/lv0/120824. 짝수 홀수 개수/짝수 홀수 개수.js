function solution(num_list) {
    var answer = [];
    answer = [num_list.filter((x) => x % 2 === 0).length,num_list.filter((x) => x % 2 !== 0).length ]
    return answer;
}