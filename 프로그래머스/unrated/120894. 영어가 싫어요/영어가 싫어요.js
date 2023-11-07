function solution(numbers) {
    let engNum = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
    engNum.map((el, idx) => numbers = numbers.replaceAll(el, idx))
    
    return Number(numbers)
}