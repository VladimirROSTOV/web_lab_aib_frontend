const redInput = document.getElementById('redInput');
const greenInput = document.getElementById('greenInput');
const blueInput = document.getElementById('blueInput');
const paletteBox = document.getElementById('palette');

function updateColor() {
    const redValue = redInput.value;
    const greenValue = greenInput.value;
    const blueValue = blueInput.value;
    const color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    paletteBox.style.backgroundColor = color;
}
//     // function getRandomNumber() {
//     //     return Math.floor(Math.random() * 256);
//     // }
// });


// btnRandom.addEventListener('click', function () {
//     const randomRed = getRandomNumber();
//     const randomGreen = getRandomNumber();
//     const randomBlue = getRandomNumber();

//     redInput.value = randomRed;
//     greenInput.value = randomGreen;
//     blueInput.value = randomBlue;

//     updateColor();
// });

redInput.addEventListener('input', updateColor);
greenInput.addEventListener('input', updateColor);
blueInput.addEventListener('input', updateColor);



