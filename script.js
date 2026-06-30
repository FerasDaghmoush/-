const openBtn = document.getElementById("openBtn");
const card = document.getElementById("card");
const music = document.getElementById("bgMusic");

openBtn.addEventListener("click", function () {

    card.style.display = "block";

    music.play().catch(function (error) {
        console.log("Music could not start:", error);
    });

    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });

});

const wedding = new Date("August 28, 2027 16:00:00").getTime();

setInterval(function () {

    let now = new Date().getTime();

    let diff = wedding - now;

    let d = Math.floor(diff / (1000 * 60 * 60 * 24));
    let h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((diff % (1000 * 60 * 60)) / 60000);
    let s = Math.floor((diff % 60000) / 1000);

    document.getElementById("countdown").innerHTML =
        `${d} يوم ${h} ساعة ${m} دقيقة ${s} ثانية`;

}, 1000);
