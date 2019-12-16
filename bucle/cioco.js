var money = 67;
var price = 5;
var chocolates = 0;

// ------ while -------

// while( money >= price ) {
//     money -= price;
//     chocolates++;
// }


// ----- do while -------

do {
    money -= price;
    chocolates++;
} while (money >= price);


document.write("Am cumparat " + chocolates + " ciocolate.");
document.write("<br>");


if (money == 1) {
    document.write("Mai am " + money + " leu");
}
else {
    document.write("Mai am " + money + " lei");
}
