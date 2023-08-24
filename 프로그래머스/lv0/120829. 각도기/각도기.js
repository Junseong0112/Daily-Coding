function solution(angle) {
    let total = 4;
    if(angle == 180){
        total;
    }else if(angle < 180 && angle > 90){
        total = 3;
    }else if(angle == 90){
        total = 2;
    }else if(angle < 90 && angle > 0){
        total = 1;
    };
    return total;
}