const redInput = document.getElementById('redInput');
const greenInput = document.getElementById('greenInput');
const blueInput = document.getElementById('blueInput');
const paletteBox = document.getElementById('palette');
let color;

function updateColor() {
    const redValue = redInput.value;
    const greenValue = greenInput.value;
    const blueValue = blueInput.value;
    color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    paletteBox.style.backgroundColor = color;
}

redInput.addEventListener('input', updateColor);
greenInput.addEventListener('input', updateColor);
blueInput.addEventListener('input', updateColor);

const createButton = document.getElementById("inputButton");
const block = document.getElementById("block");
const maxContainers = 15;
let countContainers = 0;

createButton.addEventListener("click", () => {  
    const newContainerId = countContainers % maxContainers;
    const existingContainer = document.getElementById(newContainerId.toString());

    if (countContainers >= maxContainers && existingContainer) {
        existingContainer.style.backgroundColor = color;
    } else {
        const newContainer = document.createElement("div");
        newContainer.className = "newContainer";
        newContainer.id = newContainerId.toString();
        newContainer.style.backgroundColor = color;
        block.appendChild(newContainer);
    }

    countContainers++;
});
