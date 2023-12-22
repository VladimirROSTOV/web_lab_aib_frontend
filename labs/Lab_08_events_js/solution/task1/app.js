function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

document.getElementById("redButton").addEventListener("click", () => {
    changeBackgroundColor("red");
});

document.getElementById("greenButton").addEventListener("click", () => {
    changeBackgroundColor("green");
});

document.getElementById("blueButton").addEventListener("click", () => {
    changeBackgroundColor("blue");
});
