let obj = {
  firstName: "mon",
  lastName: "moni",
  location: "kolkata",
};

console.log(obj["lastName"]); // Bracket notation
console.log(obj.lastName); // Dot notation

let a = "firstName";
console.log(obj.a); // undefined asbe karon dot notation dekh6 a key ta object e present nei..
console.log(obj[a]);
