
function showTime(){
    const date = new Date();

    let minute = date.getMinutes();
    let seconde = date.getSeconds();
    let heure = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    let amPm = date.getHours() >= 12 ? "PM" : "AM";

    minute = minute <10 ? "0" + minute : minute;
    seconde = seconde <10 ? "0" + seconde : seconde;
    document.getElementById("clock").innerHTML = `${heure}:${minute}:${seconde} ${amPm}`;
}

let interval=setInterval(showTime, 1000);

function changementPolice(){
    var e = document.getElementById('clock');
    if(e.style.fontFamily == "Montserrat, sans-serif"){
        e.style.fontFamily = "DS-Digital";
        e.style.fontSize= "173px";
    }
    else{
        e.style.fontFamily = "Montserrat, sans-serif";
        e.style.fontSize= "150px";
    }
}

function changementTimeZone(){
    const date = new Date();

    let minute = date.getMinutes();
    let seconde = date.getSeconds();
    let heure = date.getHours() > 12 ? date.getHours() - 13 : date.getHours() - 1;
    let amPm = heure >= 12 ? "AM" : "PM";
    if(heure == -1){
        heure = 11;
        amPm = "PM";
    }
    else if(heure == -2){
        heure = 11;
        amPm = "AM";
    }

    minute = minute <10 ? "0" + minute : minute;
    seconde = seconde <10 ? "0" + seconde : seconde;

    document.getElementById("clock").innerHTML = `${heure}:${minute}:${seconde} ${amPm}`;

}

function execution(){
    clearInterval(interval);
    let interval2 = setInterval(changementTimeZone, 1000);
    setTimeout(function(){
        clearInterval(interval2);
        interval = setInterval(showTime, 1000);
    }, 5000);
}

function chrono(){
    let timer = 0;
}