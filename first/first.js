var name = "Radu";
var message = "Hello " + name + "!";
var timeout = 3000;
var isNight = false;
var isMorning = false;
var nothing = null;

var date = new Date();
// var hour = date.getHours();
var hour = 0;

setTimeout(sayHello, timeout);
function sayHello() {
    // alert( message );
    console.log(message);
}

// if(isNight) {
//     alert("Good night!");
// }
// else if(isMorning) {
//     alert("Good morning!");
// }
// else {
//     alert("Christmas is here :))");
// }



if (hour >= 20 || hour <= 6) {
    if (hour == 0) {
        alert("Happy new year!")
    }
    else {
        alert("Good night!");
    }
}
else if (hour <= 11) {
    alert("Good morning!");
}
else if (hour <= 17) {
    alert("Buna ziua");
}
else {
    alert("Buna seara");
}
