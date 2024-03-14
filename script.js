var colors = ['red', 'yellow', 'green'];
var currentColorIndex = 0;

function changeColor() {
    var button = document.getElementById('colorButton');
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    button.style.backgroundColor = colors[currentColorIndex];
 }
        setInterval(changeColor, 10000);