const line = require("fs").readFileSync("dev/stdin", "utf8");
let input = line.trim().split(" ")
const [A, B, C] = input.map((el) => Number(el)).sort((a, b) => a - b)

if(A === B && B === C){
    console.log(10000 + (A * 1000))
}else if (A === B || B === C){
    console.log(1000 + (B * 100))
}else{
    console.log(C * 100)
}