function solution(arr, idx) {
  return arr.slice(idx).indexOf(1) === -1 ? -1 : arr.indexOf(1, idx)

  //다른 사람의 풀이..
  //return arr.indexOf(1, idx)
}
