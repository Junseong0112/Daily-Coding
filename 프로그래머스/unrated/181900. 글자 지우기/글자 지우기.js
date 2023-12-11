function solution(my_string, indices) {
  let char = [...my_string]

  indices.sort((a, b) => a - b);

  for (let i = indices.length - 1; i >= 0; i--){
    char.splice(indices[i], 1);
  }

  return char.join('')
}