function solution(num_list) {
      let jegob = num_list.reduce((a,b) => a+b,0)
      jegob = jegob * jegob

      let gobsem = num_list.reduce((a,b) => a * b,1);

      if(gobsem < jegob){
        return 1;
      }
      return 0;
}