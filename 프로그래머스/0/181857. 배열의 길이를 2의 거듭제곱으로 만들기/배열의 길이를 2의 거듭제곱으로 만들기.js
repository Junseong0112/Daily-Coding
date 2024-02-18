function solution(arr) {
  const arrLength = Math.pow(2, Math.ceil(Math.log2(arr.length)));

  while (arr.length < arrLength) {
    arr.push(0);
  }

  return arr;
}