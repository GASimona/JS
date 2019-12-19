var butto = document.querySelector("input");
var element = document.getElementById("time");

var showTime = function() {
    element.innerText = Date();
}

function changeStyle() {
    // element.style.color = "red";
    element.className = "newStyle";
}

// showTime();

    // ---------------- asa -------------------
// butto.onclick = showTime;
// butto.onclick = changeStyle;



    // ---------------- sau asa -------------------
// butto.onclick = function() {
//     showTime();
//     changeStyle();
// }


    // ---------------- sau asa -------------------

butto.addEventListener("click", showTime);
butto.addEventListener("click", changeStyle);

// butto.removeEventListener("click", changeStyle);