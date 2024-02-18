function solution(arr) {
  let count = 0;

  while (true) {
    const nextArr = arr.map((v) => {
      if (v > 50 && v % 2 === 0) {
        return (v = v / 2);
      } else if (v < 50 && v % 2 !== 0) {
        return (v = v * 2 + 1);
      } else {
        return v;
      }
    });

    if (arr.toString() === nextArr.toString()) {
      break;
    }

    count++;
    arr = nextArr;
  }

  return count;
}