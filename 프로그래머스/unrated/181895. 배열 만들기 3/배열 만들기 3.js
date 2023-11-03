function solution(arr, intervals) {
  let [A , B] = [...intervals]
  return [...arr.slice(A[0], A[1] + 1) , ...arr.slice(B[0], B[1] + 1)]
}