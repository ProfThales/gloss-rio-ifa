```javascript
let fontScale = 100;

const increaseButton = document.getElementById("increase-font");
const decreaseButton = document.getElementById("decrease-font");
const contrastButton = document.getElementById("toggle-contrast");
increaseButton.addEventListener("click", () => {
    fontScale += 10;

    if(fontScale > 200){
        fontScale = 200;
    }
    document.documentElement.style.fontSize = `${fontScale}%`;
});

decreaseButton.addEventListener("click", () => {
    fontScale -= 10;

    if(fontScale < 80){
        fontScale = 80;
    }

    document.documentElement.style.fontSize = `${fontScale}%`;
});

contrastButton.addEventListener("click", () => {
    document.body.classList.toggle("high-contrast");
});