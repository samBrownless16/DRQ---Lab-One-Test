class Vehicle{
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Outputs Details
    Information(){
        console.log(`Make: ${this.make}.`);
        console.log(`Model: ${this.model}.`);
        console.log(`Year: ${this.year}.`);
    }
}

// let myVehicle = new Vehicle('VW', 'Golf', 2010);
// myVehicle.Information();

class Car extends Vehicle {
    constructor(make, model, year, doors){
        super(make, model, year); // Invoke parent class constructor
        this.doors = doors;
    }

    Information() {
        super.Information(); // Invoke method in the parent class
        console.log(`Doors: ${this.doors}.`);
    }
}

let myCar = new Car('VW', 'Golf', 2010, 5);
myCar.Information();
