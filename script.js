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

    // Trigger the opening animation
    left.style.transform = "rotateY(-180deg)";
    right.style.transform = "rotateY(180deg)";

    // Show the inside content
    setTimeout(() => {
        inside.style.opacity = "1";
        inside.style.zIndex = "10";
    }, 1100);

    // Try to play music
    music.play().catch(() => {
        console.log("Autoplay blocked - music will play when user interacts again");
    });
});

/* MUSIC TOGGLE */
musicBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play().catch(() => {});
        musicBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    } else {
        music.pause();
        musicBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    }
});
