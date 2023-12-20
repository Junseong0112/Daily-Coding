function solution(arr, queries) {
    queries.forEach(v => {
    const [index1, index2] = v ;
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
  })
  return arr
}