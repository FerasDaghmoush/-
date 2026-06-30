const card = document.getElementById("card");
const openBtn = document.getElementById("openBtn");

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const inside = document.querySelector(".inside");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let opened = false;

/* SAFETY CHECKS (IMPORTANT) */
if (!openBtn) console.error("openBtn not found");
if (!left || !right || !inside) console.error("card elements missing");

/* OPEN CARD */
openBtn.addEventListener("click", () => {
    if (opened) return;
    opened = true;

    // force browser to register state change properly
    card.offsetHeight;

    // animate covers
    left.style.transform = "rotateY(-180deg)";
    right.style.transform = "rotateY(180deg)";

    // show inside after animation starts
    setTimeout(() => {
        inside.style.opacity = "1";
        inside.style.zIndex = "10";
    }, 1200);

    // play music safely (browser-safe)
    music.play().catch(() => {
        console.log("Autoplay blocked - user interaction required");
    });
});

/* MUSIC TOGGLE (FIXED) */
musicBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play().catch(() => {});
        musicBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    } else {
        music.pause();
        musicBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    }
});
