function solution(my_string) {
  let newArr = new Array(52).fill(0);
  let asciiArr = [...my_string].map(v => v.charCodeAt())
  
  for(let i = 0; i < asciiArr.length; i++){
    let charCode = asciiArr[i]
    if(charCode >= 65 && charCode <= 90){
      newArr[charCode - 65]++
    }
    else if(charCode >= 97 && charCode <= 122){
      newArr[charCode - 97 + 26]++
    }
  }
  return newArr
}