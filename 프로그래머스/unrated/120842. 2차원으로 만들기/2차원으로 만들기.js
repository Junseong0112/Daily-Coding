function solution(num_list, n) {
    let newArr = [];
    let num = 0;
    for(let i = 0; i < num_list.length; i += n){
        num += n;
        newArr.push(num_list.slice(i, num));
    }
    return newArr
}