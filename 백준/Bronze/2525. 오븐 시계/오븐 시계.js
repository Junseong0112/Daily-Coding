const line = require("fs").readFileSync("dev/stdin", "utf8");
let input = line.trim().split("\n")
let [time , timer] = input
time = time.split(' ').map(Number)
timer = parseInt(timer)

let hour = time[0]
let minute = time[1]

minute += timer

if(minute >= 60){
    hour += Math.floor(minute / 60)
    minute = minute % 60
}

if(hour >= 24){
    hour -= 24
}

console.log(hour,minute)