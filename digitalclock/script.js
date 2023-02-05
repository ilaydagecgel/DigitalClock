const hourEl=document.getElementById("hour");
const minuteEl=document.getElementById("minutes");
const secondsEl=document.getElementById("seconds");

function updateClock(){
let h=new Date().getHours()
let m=new Date().getMinutes()
let s=new Date().getSeconds()


hourEl.innerText=h;
minuteEl.innerText=m;
secondsEl.innerText=s;

setTimeout( ()=>{
updateClock();

},1000)

}
updateClock();