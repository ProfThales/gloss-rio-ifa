let fontScale = 100;

document.addEventListener("DOMContentLoaded", () => {

    const increaseButton = document.getElementById("increase-font");
    const decreaseButton = document.getElementById("decrease-font");
    const contrastButton = document.getElementById("toggle-contrast");

    if (increaseButton) {
        increaseButton.addEventListener("click", () => {
            fontScale = Math.min(fontScale + 10, 200);
            document.documentElement.style.fontSize = `${fontScale}%`;
        });
    }

    if (decreaseButton) {
        decreaseButton.addEventListener("click", () => {
            fontScale = Math.max(fontScale - 10, 80);
            document.documentElement.style.fontSize = `${fontScale}%`;
        });
    }

    if (contrastButton) {
        contrastButton.addEventListener("click", () => {
            document.body.classList.toggle("high-contrast");
        });
    }
});