const line = require("fs").readFileSync("dev/stdin", "utf8");
let input = line.trim().split(" "); 

let hour = parseInt(input[0])
let minute = parseInt(input[1])

minute -= 45;

if (minute < 0) {
    minute += 60;
    hour--;

    if (hour === -1) {
        hour = 23;
    }
}

console.log(hour + ' ' + minute);