setInterval(startFunc, 1000);

let sc = 0;
let mn = 0;
let hr = 0;

function startFunc() {
   document.querySelector(".sec").style.transform = "rotate("+ sc +"deg)"
   document.querySelector(".min").style.transform = "rotate("+ mn +"deg)"
   document.querySelector(".hour").style.transform = "rotate("+ hr +"deg)"
   
   if(sc == 360) {
       mn += 6;
       sc = 0;
   }
  

   if(mn == 360) { 
     hr += 30  
     mn = 0
   }
   
   sc += 6;
    
}