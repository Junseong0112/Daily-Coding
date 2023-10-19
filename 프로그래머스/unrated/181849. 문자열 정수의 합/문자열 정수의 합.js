function solution(num_str) {
    return [...num_str].map((el) => Number(el)).reduce((arr, cur) => arr + cur)
}