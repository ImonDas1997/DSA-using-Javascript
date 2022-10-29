class Slot {
  constructor(n, t) {
    this.number = n;
    this.type = t;
    this.isBooked = false;
  }
}

class ParkingFloor {
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
      if (i === 0) {
        this.ParkingSpots.push(new Slot(i + 1, "Bus"));
      } else if (i === 1) {
        this.ParkingSpots.push(new Slot(i + 1, "Bike"));
      } else {
        this.ParkingSpots.push(new Slot(i + 1, "Car"));
      }
    }
  }
}

//program starts here *******************
class ParkingArea {
  constructor(maxFloors) {
    this.floors = [];
    //  this.floor [0]= new ParkingFloor(1,3)

    for (let i = 0; i < maxFloors; i++) {
      //3 is number of slots we want in a floor
      this.floors[i] = new ParkingFloor(i + 1, 3);
    }
  }
}

let parkingAreaaa = new ParkingArea(3);
console.log("parking area: ", parkingAreaaa); //nested output just see o/p
