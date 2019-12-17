// ---- html ---- getElementById
// var planet = document.getElementById("redplanet");

// ----- css ----- .querySelector(cu "#" pt id "." pt class) denumiri din css
// var planet = document.querySelector("#greenplanet");


alert = function() {
    var planet = document.querySelector("#redplanet");
    planet.innerHTML = "Aliens approaching!";
    planet.style.color = "red";
} 

clear = function() {
    var planet = document.querySelector("#redplanet");
    planet.innerHTML = "Nothing to report";
    planet.style.color = "black";
} 
// document.querySelector("#redplanet").onclick = alert;
document.querySelector("#redplanet").onmouseover = alert;
document.querySelector("#redplanet").onmouseout = clear;