setInterval(startFunc, 100);

let sc = 0; 
let min = 0;
let hour = 0;

function startFunc(){
    document.querySelector(".sec").style.transform = "rotate("+sc+"deg)"
    document.querySelector(".min").style.transform = "rotate("+min+"deg)"
     
    if(sc == 360) {
        min += 6;
        sc = 0
    }
    
    sc += 6
}