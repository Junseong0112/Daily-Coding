function solution(s) {
  const obj = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };
  let arr = [];
  let word = "";
  for (let i = 0; i < s.length; i++) {
    word += s[i];
    if (obj[word]) {
      arr.push(obj[word]);
      word = "";
    }
    if (/^\d+$/.test(word)) {
      arr.push(word);
      word = "";
    }
  }

   return Number(arr.join(""));
}