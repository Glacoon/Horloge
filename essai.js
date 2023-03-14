
function showTime() {
    const date = new Date();

    let minute = date.getMinutes();
    let seconde = date.getSeconds();
    let heure = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    let amPm = date.getHours() >= 12 ? "PM" : "AM";

    minute = minute < 10 ? "0" + minute : minute;
    seconde = seconde < 10 ? "0" + seconde : seconde;
    document.getElementById("clock").innerHTML = `${heure}:${minute}:${seconde} ${amPm}`;
}

let interval = setInterval(showTime, 1000);

function changementPolice() {
    var e = document.getElementById('clock');
    if (e.style.fontFamily == "Montserrat, sans-serif") {
        e.style.fontFamily = "DS-Digital";
        e.style.fontSize = "173px";
    }
    else {
        e.style.fontFamily = "Montserrat, sans-serif";
        e.style.fontSize = "150px";
    }
}

function changementTimeZone() {
    //donner l'heure de la nouvelle-zélande UTC+12
    const date = new Date();
    let minute = date.getMinutes();
    let seconde = date.getSeconds();
    let heure = date.getHours();
    let amPm = date.getHours() >= 12 ? "PM" : "AM";

    //calculer l'heure de la nouvelle-zélande en AM/PM
    heure = heure + 12;
    if (heure > 24) {
        heure = heure - 24;
        amPm = "AM";
    }
    else if (heure > 12) {
        heure = heure - 12;
        amPm = "PM";
    }
    else if (heure == 12) {
        amPm = "PM";
    }

    minute = minute < 10 ? "0" + minute : minute;
    seconde = seconde < 10 ? "0" + seconde : seconde;
    document.getElementById("clock").innerHTML = `${heure}:${minute}:${seconde}:${amPm}`;

}

function execution() {
    clearInterval(interval);
    let interval2 = setInterval(changementTimeZone, 1000);
    setTimeout(function () {
        clearInterval(interval2);
        interval = setInterval(showTime, 1000);
    }, 5000);
}



//Passage en mode chronomètre de l'horloge
function modeChrono() {
    clearInterval(interval);
    document.getElementById("clock").innerHTML = "00:00:00";
    document.getElementById("Chrono").style.display = "block";
    document.getElementById("Chronometre").innerHTML = "Horloge";
    document.getElementById("Chronometre").onclick = cacheChrono;
    document.getElementById("Time").disabled = true;
}

function cacheChrono() {
    document.getElementById("Chrono").style.display = "none";
    interval = setInterval(showTime, 0);
    document.getElementById("Chronometre").innerHTML = "Chrono";
    document.getElementById("Chronometre").onclick = modeChrono;
    document.getElementById("Time").disabled = false;
}

var centiemesecondes = 0;
var secondes = 0;
var minutes = 0;
var isStarted = false;
var isFirstRun = true;
var lastDisplayedValue = "00:00:00";

function Chrono() {
    document.getElementById("start").style.backgroundColor = "darkgreen";
    document.getElementById("stop").style.backgroundColor = "aliceblue";

    centiemesecondes += 1;
    if (centiemesecondes == 100) {
        centiemesecondes = 0;
        secondes++;
    }
    if (secondes == 60) {
        secondes = 0;
        minutes++;
        isStarted = false;
    }
    if (minutes == 60) {
        minutes = 0;
    }

    var displaySeconds = isStarted ?  "00" : (secondes < 10 ? "0" : "") + secondes;
    var displayMinutes = (minutes < 10 ? "0" : "") + minutes;
    var displayCentiemeSecondes = (centiemesecondes < 10 ? "0" : "") + centiemesecondes.toString().slice(-2);

    lastDisplayedValue = `${displayMinutes}:${displaySeconds}:${displayCentiemeSecondes}`;
    document.getElementById("clock").innerHTML = lastDisplayedValue;

    isFirstRun = false;
}

let intervalX;

function startChrono() {
    intervalX = setInterval(Chrono, 10);
    document.getElementById("Chronometre").disabled = true;
}

function stopChrono() {
    clearInterval(intervalX);
    document.getElementById("start").style.backgroundColor = "aliceblue";
    document.getElementById("stop").style.backgroundColor = "darkred";
    document.getElementById("Chronometre").disabled = false;
}


function resetChrono() {
    clearInterval(intervalX);
    centiemesecondes = 0;
    secondes = 0;
    minutes = 0;
    document.getElementById("clock").innerHTML = "00:00:00";
    document.getElementById("start").style.backgroundColor = "aliceblue";
    document.getElementById("stop").style.backgroundColor = "aliceblue";
}