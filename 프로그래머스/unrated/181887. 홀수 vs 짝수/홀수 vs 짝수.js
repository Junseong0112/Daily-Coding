function solution(num_list) {
  let even = num_list.filter((el, idx) => idx % 2 === 0).reduce((acc, cur) => acc + cur)
  let odd = num_list.filter((el, idx) => idx % 2 !== 0).reduce((acc, cur) => acc + cur)

  return even > odd ? even : even === odd ? even : odd
}