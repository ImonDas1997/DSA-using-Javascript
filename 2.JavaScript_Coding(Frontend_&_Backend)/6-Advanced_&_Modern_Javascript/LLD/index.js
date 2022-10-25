class Vehicle {
  constructor(t, r) {
    this.type = t;
    this.regNumber = r;
  }
}

// class Car{ 
//     constructor(t,r) {
//         this.type = t; 
//         this.regNumber = r;
//     }
// }

//Multiple types of vehciles ( Bike, car, Bus)

//Inheritence

class Car extends Vehicle {  constructor( r){
super('Car', r);
 }
}

class Bike extends Vehicle {
  constructor( r) {
    super('Bike', r);
  }
}

class Bus extends Vehicle {
  constructor(r) {
    super('Bus',r);
  }
}

//parking slots
class Slot {
  constructor(n, t) {
    this.number = n;
    this.type = t;
    this.isBooked = false;
  }
}

class ParkingFloor{ 
    constructor(floorNumber, maxSlots) {
      //how many parking floors in PPS? -> 3
      //how many parking slots in one floor? -> 3
      //let floor = {{}, {}, {}]; (3 slots in array)

      this.floorNumber = floorNumber; //tarcking the floor number
      this.ParkingSpots = []; //storage for storing slots

      //we need to push slot objects to parking Slots

    //   this. ParkingSlots [0] = new Slot(0, 'Bus') ;
    //    this.ParkingSlots[1] = new Slot(0, "Car"); 
    //     this.ParkingSlots[2] = new Slot(0, 'Bike'); 
for (let i = 0; i < maxSlots; i++) { 
//slot number 1 
if (i === 0) { this.ParkingSlots.push(new Slot(i+1, 'Bus'))
}
else if (i === 1) { 
    this.ParkingSlots.push(new Slot (i+1, 'Bike')) 
} else {
    this.ParkingSlots.push(new Slot(i+1, 'Car'))
}
}
}
}   

let pf1 = new ParkingFloor (1, 3);

class ParkingArea {
  constructor(maxFloors) {
    this.floors = [];
    //  this.floor [0]= new ParkingFloor(1,3)

    for (let i = 0; i < maxFloors; i++) {
      //3 is number of slots we want in a floor
      this.floors[i] = new ParkingFloor(i + 1, 3);
    }
  }

  //lets check if slot is available or not.
  findSlot(type) {
    //i is representing floors
    for (let i = 0; i < this.numberofFloors; i++) {
      //in each floor, how many slots to check?-> 3
      //2nd iteration,
      for (let slot of this.floors[i].ParkingSlots) {
        //comparing below line with findslot (type)
        if (slot.type === type && slot.isBooked === false) {
          return { floorNumber: i + 1, found_slot: slot };
        }
      }
    }
    return false;
  }
  bookSlot(vehicle) {
    //lrts find the slot
    let slot = this.findSlot(vehicle.type);
    if (slot === false) {
      console.log("All slots are full");
      return false;
    }
    //booking the slot, finalllly! 
    slot.found_slot.isBooked=true;
    console.log('slot:',slot);
  }
}

let p1 = new ParkingArea (3); 
let c1 = new Car('MH12 BT6723');

p1.bookSlot(c1);
console.log("p1 : ", p1);
 