alert("JS LOADED");
console.log("SCRIPT IS CONNECTED");

document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("openBtn");

    if (!openBtn) {
        console.error("openBtn NOT FOUND");
        return;
    }

    openBtn.addEventListener("click", () => {
        alert("BUTTON WORKS");
    });
});
