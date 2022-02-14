const randomColor = () => {
    let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return color;
}

const changeBackground = () => {
    let body = document.querySelector("body");
    let colorFirst = randomColor();
    let colorSecond = randomColor();
    body.style.background = "linear-gradient(to right, " + colorFirst + ", " + colorSecond + ")";

    let text = document.querySelector("p");
    text.innerText = `linear-gradient(to right, ${colorFirst}, ${colorSecond})`;

    let button = document.querySelector("button");
    button.addEventListener('click', changeBackground);
}

window.addEventListener('load', changeBackground);