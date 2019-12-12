var code;

// while( code < 1024 ) {
//     document.write(code + " - " + String.fromCharCode(code));
//     document.write("<br>");
//     code++;
// }

// --------- for ---------

// for( var code = 0; code < 1025; code++ ) {
//     document.write(code + " - " + String.fromCharCode(code));
//     document.write("<br>");
// }

for(code = 0; code < 256; code++ ) {
    document.write(code + " - " + String.fromCharCode(code));
    document.write("<br>");
}