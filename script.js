const grayBtn = document.getElementById("grayMode");
const lightBtn = document.getElementById("lightMode");
const blurrBtn = document.getElementById("blurr");
const all = document.getElementById("all");
const startBtn = document.getElementById("start");
const canv = document.getElementById("snakeGame");
const spannung = document.getElementById("u");
const widerstand = document.getElementById("r");
const strom = document.getElementById("i");
const uriBtn = document.getElementById("uriBtn");
uriBtn.addEventListener("click", berechnen)
grayBtn.addEventListener("click", grayMode);
lightBtn.addEventListener("click", lightMode);
blurrBtn.addEventListener("click", blurrMode);
startBtn.addEventListener("click", start);
let gray = false;
let gameOn = false;
let interval;
function berechnen() {
    if (!spannung.value) {
        spannung.value = widerstand.value * strom.value;
    }
    else if(!widerstand.value){
        widerstand.value = spannung.value / strom.value;
    }
    else {
        strom.value = spannung.value / widerstand.value;
    }
}
//Graymode
function grayMode() {
    if (!gray) {
        gray = true;
        document.body.style.filter = "grayscale(100%)";
    }
    else {
        gray = false;
        document.body.style.filter = "grayscale(0%)";
    }
}
//blurred
function blurrMode() {
    if (blurrBtn.textContent === "Scharf") {
        blurrBtn.textContent = "Verschwommen";
        all.style.filter = "blur(10px)";
    }
    else {
        blurrBtn.textContent = "Scharf";
        all.style.filter = "blur(0px)";
        setCookie("scharf", blur, 360);
    }
}
//Lightmode
function lightMode() {
    if (lightBtn.textContent === "Lightmode") {
        lightBtn.textContent = "Darkmode";
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        canv.style.border = "10px double white";
    }
    else {
        lightBtn.textContent = "Lightmode";
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        canv.style.border = "10px double black";
    }
}

//Snakegame
function start() {
    if (!gameOn) {
        gameOn = true;
        canv.style.display = "block";
        canv.scrollIntoView({ behavior: "smooth" });
        ctx = canv.getContext("2d");
        document.addEventListener("keydown", keyPush);
        interval = setInterval(game, 1000 / 15);
    }
    else {
        gameOn = false;
        clearInterval(interval);
    }
}
let xv = yv = 0;
let gs = tc = 20;
let ax = ay = 15;
let px = py = 10;
let trail = [];
let tail = 5;
function game() {
    px += xv;
    py += yv;
    if (px<0){
        px = tc - 1;
    }
    if (px>tc-1){
        px = 0;
    }
    if (py<0){
        py = tc - 1;
    } if (py>tc-1) {
        py = 0;
    }
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canv.width, canv.height);

    ctx.fillStyle = "lime";
    for (var i = 0; i < trail.length; i++) {
        ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
        if (trail[i].x == px && trail[i].y == py) {
            tail = 5;
        }
    }
    trail.push({ x: px, y: py });
    while (trail.length > tail) {
        trail.shift();
    }
    if (ax == px && ay == py) {
        tail++;
        ax = Math.floor(Math.random() * tc)
        ay = Math.floor(Math.random() * tc)
    }
    ctx.fillStyle = "red";
    ctx.fillRect(ax*gs, ay*gs, gs-2, gs-2);
}
function keyPush(evt){
    switch (evt.keyCode) {
        case 65:
            xv = -1;
            yv = 0;
            break;
        case 87:
            xv = 0;
            yv = -1;
            break;
        case 68:
            xv = 1;
            yv = 0;
            break;
        case 83:
            xv = 0;
            yv = 1;
            break;
    }
}