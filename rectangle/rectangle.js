
var rectangle = document.querySelector("div");

function minimize() {
    var computedStyle = window.getComputedStyle(rectangle);
    current = computedStyle.height;

    var n = current.substring(0, current.length - 2);
    n = Math.round(n);

    var newr = --n + "px";
    rectangle.style.height = newr;

    if (n > 3) {
        setTimeout(minimize, 100);
    }
    
}

minimize();
