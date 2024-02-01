function solution(chicken) {
  let total = 0;
  let coupon = chicken;

  while (coupon >= 10) {
    total += Math.floor(coupon * 0.1);
    coupon = Math.floor(coupon * 0.1) + (coupon % 10);
  }

  return total;
}