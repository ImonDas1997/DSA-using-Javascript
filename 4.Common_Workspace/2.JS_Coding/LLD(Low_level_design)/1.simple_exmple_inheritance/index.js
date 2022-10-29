class Vehicle {
  constructor(t, r) {
    this.type = t;
    this.regNumber = r;
  }
}
let v1 = new Vehicle("Bike", "Bike-123");
console.log("vehicle: ", v1); // just calling the class passing parameter using constructor function

//---------------------------------------------------------------------------------------------

// class Car{
//     constructor(t,r) {
//         this.type = t;
//         this.regNumber = r;
//     }
// }

//Multiple types of vehciles ( Bike, car, Bus)

//Inheritence

class Car extends Vehicle {
  constructor(r) {
    super("Car", r); //super will always  call parent **********************
  }
}

let v2 = new Car("Lamborgini-898934");
console.log("car: ", v2);

//---------------------------------------------------------------------------------------------

class Bike extends Vehicle {
  constructor(r) {
    super("Bike", r);
  }
}
let bike = new Bike("honda-332");
console.log("bike: ", bike);
//---------------------------------------------------------------------------------------------

class Bus extends Vehicle {
  constructor(r) {
    super("Bus", r);
  }
}

let b = new Bike("volvo-332332");
console.log("bus: ", b);
//---------------------------------------------------------------------------------------------

//all class are using vehicle class as a parent class and we are exploring inheritance concept
