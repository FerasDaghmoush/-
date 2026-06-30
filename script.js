document
.getElementById("openBtn")
.onclick=function(){

document
.getElementById("card")
.style.display="block";

window.scrollTo({
top:window.innerHeight,
behavior:"smooth"
});

};

const wedding=new Date("August 28, 2027 16:00:00").getTime();

setInterval(()=>{

let now=new Date().getTime();

let diff=wedding-now;

let d=Math.floor(diff/(1000*60*60*24));

let h=Math.floor((diff%(1000*60*60*24))/(1000*60*60));

let m=Math.floor((diff%(1000*60*60))/60000);

let s=Math.floor((diff%(60000))/1000);

document.getElementById("countdown").innerHTML=

`${d} Days ${h} Hours ${m} Minutes ${s} Seconds`;

},1000);
