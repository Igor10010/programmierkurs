const calculateBtn = document.getElementById("calculate");
const input1 = document.getElementById("task1");
const input2 = document.getElementById("task2");
const symbols = document.getElementById("symbols");
const resCont = document.getElementById("resultContainer");
calculateBtn.addEventListener("click", calculate);
function calculate() {
    let symbol = symbols.options[symbols.selectedIndex].innerText;
    let result;
    switch (symbol) {
        case "+":
            result = Number(input1.value) + Number(input2.value);
            break;
        case "-":
            result = Number(input1.value) - Number(input2.value);
            break;
        case "*":
            result = Number(input1.value) * Number(input2.value);
            break;
        case "/":
            result = Number(input1.value) / Number(input2.value);
            break;
    }
   
    if (isNaN(result)) {
        resCont.textContent = "Bitte geben Sie eine Zahl ein.";
        resCont.style.filter = "opacity(1)";
    }
    else {
        resCont.textContent = "Das Ergebnis von " + input1.value + " und " + input2.value + " ist " + Number(result);
        resCont.style.filter = "opacity(1)";
    }
}