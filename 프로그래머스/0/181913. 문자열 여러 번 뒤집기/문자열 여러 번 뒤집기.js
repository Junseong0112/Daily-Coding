function solution(my_string, queries) {
      let newStr = my_string.slice();
  let result = newStr;

  for (let i = 0; i < queries.length; i++) {
    const [A, B] = queries[i];
    let head = result.slice(0, A);
    let mid = result
      .slice(A, B + 1)
      .split("")
      .reverse()
      .join("");
    let tail = result.slice(B + 1, result.length);
    result = head + mid + tail;
  }

  return result;
}