function solution(arr, delete_list) {
  return arr.filter(function(el){
    for(let i = 0; i < delete_list.length; i++){
      if(el == delete_list[i]){
        return false
      }
    }
    return el
  })
}