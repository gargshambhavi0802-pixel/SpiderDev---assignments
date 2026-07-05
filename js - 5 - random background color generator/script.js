const changeBtn = document.getElementById("color_change");
const copyBtn = document.getElementById("copy");
const hexDisplay = document.getElementById("hex");

function generateColor() {

    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * 16);
        color += letters[randomIndex];
    }

    return color;
}

changeBtn.addEventListener("click", function () {

    let randomColor = generateColor();

    document.body.style.backgroundColor = randomColor;

    hexDisplay.innerText = "HEX Code: " + randomColor;
});

copyBtn.addEventListener("click", function () {

    let hexCode = hexDisplay.innerText.replace("HEX Code: ", "");

    navigator.clipboard.writeText(hexCode);

    alert("Copied: " + hexCode);

});