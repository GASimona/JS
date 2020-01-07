function double1(n) {
    return n * 2;
}


// ------------ functie anonima ------------
var double2 = function(n) {
    return n * 2;
} 

// ---------------- arrow function -------- 3 scurtatura pentru 2 --------
var double3 = (n) => n * 2;

double2(10);
double3(10);