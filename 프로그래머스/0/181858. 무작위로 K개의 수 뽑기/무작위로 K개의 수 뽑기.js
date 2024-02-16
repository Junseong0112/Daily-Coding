function solution(arr, k) {
  const newSetArr = new Set(arr);
  const newArr = [...newSetArr].slice(0, k);
  const newArrLength = newArr.length;

  if (newArrLength !== k) {
    for (let i = newArrLength; i < k; i++) {
      newArr.push(-1);
    }
    return newArr;
  }

  return newArr;
}