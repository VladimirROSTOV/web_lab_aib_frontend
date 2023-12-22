const redInput = document.getElementById('redInput');
const greenInput = document.getElementById('greenInput');
const blueInput = document.getElementById('blueInput');
const paletteBox = document.getElementById('palette');
let color;

function updateColor() {
    const redValue = redInput.value;
    const greenValue = greenInput.value;
    const blueValue = blueInput.value;

    if (redValue < 0 || redValue > 255 || greenValue < 0 || greenValue > 255 || blueValue < 0 || blueValue > 255) {
        alert("Values should be in the range of 0 to 255.");
        return;
    }

    color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    paletteBox.style.backgroundColor = color;

    localStorage.setItem("savedColor", color);
}

redInput.addEventListener('input', updateColor);
greenInput.addEventListener('input', updateColor);
blueInput.addEventListener('input', updateColor);

const creatButton = document.getElementById("inputButton");
const block = document.getElementById("block");
const maxContainer = 15;
let countContainer = 0;

creatButton.addEventListener("click", () => {
    const newContainerId = countContainer % maxContainer;
    const existingContainer = document.getElementById(newContainerId.toString());

    if (countContainer >= maxContainer && existingContainer) {
        existingContainer.style.backgroundColor = color;
        localStorage.setItem(newContainerId.toString(), color); 
    } else {
        const newContainer = document.createElement("div");
        newContainer.className = "newContainer";
        newContainer.id = countContainer.toString();
        newContainer.style.backgroundColor = color;
        block.appendChild(newContainer);
        localStorage.setItem(countContainer.toString(), color); 
    }

    countContainer++;
});

block.addEventListener("click", (event) => {
    const clickedBlock = event.target;

    if (clickedBlock.className === "newContainer") {
        const savedColor = localStorage.getItem(clickedBlock.id); 

        if (savedColor) {
            clickedBlock.style.backgroundColor = savedColor;
            localStorage.setItem("savedColor", savedColor); 
        }
    }
});

document.addEventListener("click", (event) => {
    const clickedElement = event.target;

    if (
        clickedElement !== paletteBox &&
        clickedElement !== redInput &&
        clickedElement !== greenInput &&
        clickedElement !== blueInput &&
        clickedElement !== creatButton &&
        clickedElement.className !== "newContainer"
    ) {
        const savedColor = localStorage.getItem("savedColor");
        if (savedColor) {
            clickedElement.style.backgroundColor = savedColor;
        }
    }
});