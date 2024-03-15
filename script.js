let colors = ['red', 'yellow', 'green'];
let currentColorIndex = 0;

function changeColor() {
    let button = document.getElementById('colorButton');
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    button.style.backgroundColor = colors[currentColorIndex];
 }
        setInterval(changeColor, 10000);