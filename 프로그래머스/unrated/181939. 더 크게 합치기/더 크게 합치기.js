function solution(a, b) {
  let aNum = Number(a.toString() + b)
  let bNum = Number(b + a.toString())

  return aNum > bNum ? aNum : bNum
}