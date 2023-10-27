function solution(num_list, n) {
    let head = num_list.slice(0, n);
    let tail = num_list.slice(n)
    return tail.concat(head);
}