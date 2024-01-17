function solution(arr, queries) {
  let newArr = [];

  for(let i = 0; i < queries.length; i++){
    const [s, e, k] = queries[i]
    let filterNum = arr.slice(s, e + 1).filter(x => x > k)
    newArr.push(filterNum)
  }
  return newArr.map((v) => v.length === 0 ? -1 : Math.min(...v))
}