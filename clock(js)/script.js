setInterval(fSec, 1000);

let sec = 0;
let min = 0;
let hour = 0;

function fSec() {
    document.querySelector(".sec").style.transform = "rotate("+sec+"deg)"
    document.querySelector(".min").style.transform = "rotate("+min+"deg)"
    if(sec + 6 == 360) {
        sec = 0;
        min += 6;
    }
    sec += 6
}