function solution(s) {
  let bigStr = s.split(/[a-z]/).join('').split('').sort().reverse()
  let smallStr = s.split(/[A-Z]/).join('').split('').sort().reverse()

  return [...smallStr, ...bigStr].join('')
}