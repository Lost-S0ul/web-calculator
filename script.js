let display = document.getElementById("display");

function appendChar(char) {
    display.innerText += char;
}

function clearDisplay() {
    display.innerText = "";
}

function deleteChar() {
    display.innerText = display.innerText.slice(0, -1);
}

function calculate() {
    let result = eval(display.innerText);
    display.innerText = result;
}