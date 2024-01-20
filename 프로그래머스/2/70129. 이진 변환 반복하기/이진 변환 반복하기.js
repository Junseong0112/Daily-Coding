function solution(s) {
//   let result = [0, 0];

//   while (s.length !== 1) {
//     result[0]++;
//     result[1] += (s.match(/0/g) || []).length;
//     s = s.replace(/0/g, "").length.toString(2);
//   }

//     return result
    
  let result = [0, 0];
  let sLength = 0;

  while (s.length !== 1) {
    sLength = s.length; // 7
    s = s.split("0").join("");
    result[0]++;
    result[1] += sLength - s.length;
    s = s.length.toString(2);
  }

  return result;
}