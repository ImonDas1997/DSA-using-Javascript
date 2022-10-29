



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
    slot.found_slot.isBooked = true;
    console.log("slot:", slot);
  }
}

let p1 = new ParkingArea(3);
let c1 = new Car("MH12 BT6723");

p1.bookSlot(c1);
console.log("p1 : ", p1);



