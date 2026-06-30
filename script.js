const card = document.getElementById("card");
const openBtn = document.getElementById("openBtn");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let opened = false;

openBtn.addEventListener("click", () => {

    if (opened) return;

    opened = true;

    card.classList.add("open");

    music.play()
        .then(() => {
            musicBtn.innerHTML =
                '<i class="fa-solid fa-volume-high"></i>';
        })
        .catch(() => {});
});

musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicBtn.innerHTML =
            '<i class="fa-solid fa-volume-high"></i>';

    } else {

        music.pause();

        musicBtn.innerHTML =
            '<i class="fa-solid fa-volume-xmark"></i>';
    }
});

const eventDate = new Date(
    "July 10, 2026 19:00:00"
).getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance <= 0) {

        document.getElementById("countdown").innerHTML =
            "🎉 حان موعد الحفل";

        return;
    }

    const days =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours =
        Math.floor(
            (distance % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (distance % (1000 * 60 * 60))
            / (1000 * 60)
        );

    const seconds =
        Math.floor(
            (distance % (1000 * 60))
            / 1000
        );

    document.getElementById("countdown").innerHTML =
        `${days} يوم • ${hours} ساعة • ${minutes} دقيقة • ${seconds} ثانية`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
