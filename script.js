const card = document.getElementById("card");
const openBtn = document.getElementById("openBtn");

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const inside = document.querySelector(".inside");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let opened = false;

/* OPEN CARD */
openBtn.addEventListener("click", () => {
    if (opened) return;
    opened = true;

    // animate covers
    left.style.transform = "rotateY(-180deg)";
    right.style.transform = "rotateY(180deg)";

    // show inside AFTER animation starts
    setTimeout(() => {
        inside.style.opacity = "1";
        inside.style.zIndex = "10";
    }, 1200);

    // play music
    music.play().catch(() => {});
});
