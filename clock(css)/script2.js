let deg = 6;

setInterval(()=> {
   let day = new Date();
   
   let hr = day.getHours() * 30;
   let mn = day.getMinutes() * deg;
   let sc = day.getSeconds() * deg;

   hour.style.transform = `rotate(${hr + (mn/12)}deg)`
   min.style.transform = `rotate(${mn}deg)`
   sec.style.transform = `rotate(${sc}deg)`
})