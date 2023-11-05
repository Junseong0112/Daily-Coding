function solution(number) {
    let newNum = [...number].map((el) => parseInt(el)).reduce((acc, cur) => acc + cur)
    return newNum % 9
}