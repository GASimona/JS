var car = {
    make: "Ford",
    medel: "Mustang",
    year: 1990,
    color: "red",
    passengers: 4,
    mileage: 2000,

    engineIsOn: false,

    fuel: 50,
    maxFuel: 50,
    mediumConsumption: 7.5,

    refill: function(num) {
        if (this.fuel + num > this.maxFuel) {
            this.fuel = this.maxFuel;
            console.log("Too much! ");
        }
        else {
            this.fuel += num;
        }
    },
    drive: function(distance) {
        if (this.distanceToEmpty() < distance) {
            console.log("Too far!");
            distance = this.distanceToEmpty();
        }
        consumption = Math.round(distance * this.mediumConsumption / 100);
        this.fuel -= consumption;
        this.mileage += distance;
    },
    distanceToEmpty: function() {
        return Math.round(this.fuel / this.mediumConsumption * 100);
    },


    stop: function() {
        if (this.engineIsOn) {
            console.log("Car stopped"); 
        }
        else {
            console.log("Car is already stopped");
        }
    },

    start: function() {
        if (!this.engineIsOn) {
            this.engineIsOn = true;
            console.log("Car started"); 
        }
        else {
            console.log("Car is already started");
        }
    },

}

car.mileage = 2150;
console.log(car.mileage);
console.log(car["year"]);

car.start();
car.start();

car.drive(100);
console.log( "combustibil pt 100: " + car.fuel);
car.drive(800);
console.log("combustibil pt 800: " + car.fuel);
car.refill(30);
console.log("alimentare: " + car.fuel);

// for (prop in car) {
//     console.log(prop + " : " + car[prop]);
// }
