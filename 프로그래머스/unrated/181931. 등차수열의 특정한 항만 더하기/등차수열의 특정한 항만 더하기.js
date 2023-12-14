function solution(a, d, included) {
  let newArr = [];
  let includesLength = included.length;
  let num = a;

  for(let i = 0; i < includesLength; i++){
    newArr.push(num)
    num += d
  }

  return newArr.filter((v, i) => included[i]).reduce((acc, cur) => acc + cur)
}