function solution(money) {
    var answer = [];
    let americano = 5500;
    let totalAmericano = money % americano;
    let priceAmericano = money / americano;
    
    answer = [Math.floor(priceAmericano), totalAmericano]
    return answer;
}