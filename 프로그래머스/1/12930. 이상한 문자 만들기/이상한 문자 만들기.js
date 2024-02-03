function solution(s) {
  let arrStr = s.split(" ");
  let newArr = [];

  arrStr.forEach((el) => {
    let arr = [];
    for (let i = 0; i < el.length; i++) {
      if (i % 2 === 0) {
        arr.push(el[i].toUpperCase());
      } else if (i % 2 !== 0) {
        arr.push(el[i].toLowerCase());
      }
    }
    newArr.push(arr.join(""));
  });

  return newArr.join(" ");
}