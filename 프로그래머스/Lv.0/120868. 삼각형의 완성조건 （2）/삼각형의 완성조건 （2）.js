function solution(sides) {
      maxSides = Math.max(...sides);
  minSides = Math.min(...sides)
  sidesSum = sides[0] + sides[1]
  let num1 = 0;
  let num2 = 0;
  for(let i = 0; i <= maxSides; i++){
    if(maxSides < minSides + i){
      num1++
    }
  }
  for(let i = maxSides + 1; i < sidesSum; i++){
    num2++
  }
  return num1 + num2
}