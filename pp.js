
import { sayHi, plusFive, changeToFunkyColor } from "./modules.js";
sayHi()
plusFive(10)

let headContainer = document.getElementById("container")
setInterval(function() {changeToFunkyColor(headContainer)}, 3000);

let x = document.getElementById("time")
x.innerHTML = seconds

var time = document.getElementById('time');
var color = document.getElementById('color');

var seconds = 0;
function incrementSeconds() {
    seconds += 1;
    time.innerText = seconds + " seconds";
}

var seconds2 = 0;
function incrementColors() {
    seconds2 += 1;
    color.innerText = " " + (Math.floor(seconds/3) + 1) + " colors";
}
//seconds should be devided by the same int as the setInterval delay * 1000
setInterval(incrementSeconds, 1000);
setInterval(incrementColors, 3000); 