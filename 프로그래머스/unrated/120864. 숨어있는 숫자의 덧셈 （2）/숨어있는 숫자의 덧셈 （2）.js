function solution(my_string) {
  let newResult =my_string.replace(/[^0-9]/g, ' ')
  return newResult.split(' ').filter(x => x).reduce((acc, cur) => acc + parseInt(cur), 0)
}