function solution(a, b) {
    let A = Number(a.toString() + b.toString());
    let B = 2 * a * b
    
    return A > B ? A : A === B ? A : B
}