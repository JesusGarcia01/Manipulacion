function changeColor() {
    var circle = document.getElementById('circle');
    var colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    circle.style.backgroundColor = randomColor;
}

function changeSize() {
    var circle = document.getElementById('circle');
    var newWidth = Math.floor(Math.random() * 200) + 50;
    var newHeight = Math.floor(Math.random() * 200) + 50;
    circle.style.width = newWidth + 'px';
    circle.style.height = newHeight + 'px';
}

function toggleVisibility() {
    var circle = document.getElementById('circle');
    if (circle.style.display === 'none' || circle.style.display === '') {
        circle.style.display = 'block';
    } else {
        circle.style.display = 'none';
    }
}
