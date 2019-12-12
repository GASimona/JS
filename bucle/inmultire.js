var z = 0 ;

for(var i = 1; i < 10; i++) {
    for(var j = 1; j < 10; j++) {
        z = i * j;
        document.write(i + " * " + j + " = " + z);
        document.write("<br>");
    }
    document.write("<br>");
}