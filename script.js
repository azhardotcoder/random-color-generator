const getcolor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    const randomColor = document.getElementById("color-code");
    randomColor.innerHTML = randomCode;
}

document.getElementById("btn").addEventListener(
    "click",
    getcolor
);

function copyPassword() {
    const randomColor = document.getElementById("color-code").innerText;
    const tempInput = document.createElement("input");
    tempInput.value = randomColor;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Color code copied to clipboard: " + randomColor);
}