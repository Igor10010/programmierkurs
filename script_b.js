const btn = document.getElementById("btn");
const container = document.getElementById("ageContainer")
let userAge;
btn.addEventListener("click", ageCheck);
function ageCheck() {
    userAge = prompt("Wie alt bist du?");
    if (userAge >= 18) {
        alert("Access granted!");
        container.textContent = "Sie sind " + userAge + " Jahre alt.";
    } else if (userAge >= 1) {
        alert("Access denied!");
        container.textContent = "Sie sind " + userAge + " Jahre alt."
    } else {
        alert("Bitte geben sie eine Zahl die gr��er als 0 ist ein");
        container.textContent = "";
    }
    while (userAge < 18) {
        userAge++;
        console.log(userAge);
    }
}

//for-Schleife
const loopBtn = document.getElementById("loopBtn")
loopBtn.addEventListener("click", forLoop)
function forLoop() {
    for (let i = 1; i <= 20; i++) {
        console.log(i);
    }
}