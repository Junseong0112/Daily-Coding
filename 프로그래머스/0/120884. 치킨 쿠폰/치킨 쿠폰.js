function solution(chicken) {
  let total = 0;
  let ck = chicken;

  while (ck >= 10) {
    let coupon = Math.floor(ck * 0.1);
    total += coupon;
    ck += coupon;
    ck -= coupon * 10;
  }
  return total;
}