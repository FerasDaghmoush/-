const card = document.getElementById("card");
const openBtn = document.getElementById("openBtn");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let isPlaying = false;

/* OPEN CARD */
openBtn.onclick = function () {
    card.classList.add("open");
    music.play();
    isPlaying = true;
    musicBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
};

/* MUSIC TOGGLE */
musicBtn.onclick = function () {
    if (music.paused) {
        music.play();
        musicBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        isPlaying = true;
    } else {
        music.pause();
        musicBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
        isPlaying = false;
    }
};

/* COUNTDOWN */
const wedding = new Date("August 28, 2027 16:00:00").getTime();

setInterval(() => {
    let now = new Date().getTime();
    let diff = wedding - now;

    let d = Math.floor(diff / (1000 * 60 * 60 * 24));
    let h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((diff % (1000 * 60 * 60)) / 60000);
    let s = Math.floor((diff % 60000) / 1000);

    document.getElementById("countdown").innerHTML =
        `${d} يوم ${h} ساعة ${m} دقيقة ${s} ثانية`;
}, 1000);
