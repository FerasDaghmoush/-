const card=document.getElementById("card");

const left=document.querySelector(".left");

const right=document.querySelector(".right");

const inside=document.querySelector(".inside");

const music=document.getElementById("bgMusic");

document.getElementById("openBtn").onclick=function(){

music.play();

left.style.transform="rotateY(-170deg)";

right.style.transform="rotateY(170deg)";

setTimeout(()=>{

inside.style.opacity="1";

},1200);

};

const wedding=new Date("August 28,2027 16:00:00").getTime();

setInterval(()=>{

let now=new Date().getTime();

let diff=wedding-now;

let d=Math.floor(diff/(1000*60*60*24));

let h=Math.floor((diff%(1000*60*60*24))/(1000*60*60));

let m=Math.floor((diff%(1000*60*60))/60000);

let s=Math.floor((diff%(60000))/1000);

document.getElementById("countdown").innerHTML=

`${d} يوم ${h} ساعة ${m} دقيقة ${s} ثانية`;

},1000);
