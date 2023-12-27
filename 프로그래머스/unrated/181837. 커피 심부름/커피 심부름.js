function solution(order) {
  const obj = {
    iceamericano : 4500,
    americanoice : 4500,
    hotamericano : 4500,
    americanohot : 4500,
    icecafelatte : 5000,
    cafelatteice : 5000,
    hotcafelatte : 5000,
    cafelattehot : 5000,
    americano : 4500,
    cafelatte : 5000,
    anything : 4500,
  }

  return order.map(v => obj[v]).reduce((acc, cur) => acc + cur);
}