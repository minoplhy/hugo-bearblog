const links = document.querySelectorAll('.random-color');

// To avoid too bright and too dark color being generated
function getRandomColor(minBrightness = 100, maxBrightness = 230) {
    // Generate random color components within a specific brightness range
    let red = Math.floor(Math.random() * (maxBrightness - minBrightness) + minBrightness);
    let green = Math.floor(Math.random() * (maxBrightness - minBrightness) + minBrightness);
    let blue = Math.floor(Math.random() * (maxBrightness - minBrightness) + minBrightness);

    // Convert components to hexadecimal string format
    red = red.toString(16).padStart(2, '0');
    green = green.toString(16).padStart(2, '0');
    blue = blue.toString(16).padStart(2, '0');

    return `#${red}${green}${blue}`;
}


function setRandomColors() {
    links.forEach(link => {
        link.style.color = getRandomColor();
    });
}

window.onload = setRandomColors;