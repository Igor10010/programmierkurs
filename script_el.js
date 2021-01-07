//Einkaufsliste
const input = document.getElementById("input");
const addButton = document.getElementById("add-button");
const ul = document.getElementById("list");
const li = document.createElement("li");
addButton.addEventListener("click", addToList);
function addToList() {
    if (input.value !== "") {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
        input.placeholder = "Artikel einfügen";
    }
    else {
        input.placeholder = "Bitte geben Sie einen Artikel ein";
    }
}

//Wörter Rückwärts
const backwardsButton = document.getElementById("backwards-button");
const container = document.getElementById("backwards-container");
backwardsButton.addEventListener("click", backwards)
function backwards() {
    const backwardsInput = document.getElementById("backwards-input").value.split("").reverse().join("");
    container.textContent =  backwardsInput;
    console.log(backwardsInput)
}