let superHeroes = ["Batman", "Superman", "Shaktimaan", "Ironman", "Spiderman"];
let ageArr = [45, 38, 52, 50, 27];
let powerLevel = [400, 700, 800, 900, 600];

// Step 1 : create array of objects
let arr = [];
for (let i = 0; i < ageArr.length; i++) {
  let name = superHeroes[i];
  let age = ageArr[i];
  let power = powerLevel[i];
  let obj = { name, age, power };
  arr.push(obj);
}

// Print the total power of all the super heroes
let total = 0;
for (let obj of arr) {
  total += obj.power;
}
console.log(total);

// Print the name and the power of super hero with maximum power
// Print the name and the power of super hero with minimum power

let max = 0;
let maxsuper = "";
let min = Infinity;
let minsuper = "";
for (let el of arr) {
  if (el.power > max) {
    max = el.power;
    maxsuper = el.name;
  }
  if (el.power < min) {
    min = el.power;
    minsuper = el.name;
  }
}

console.log(minsuper, min);
console.log(maxsuper, max);

let a = 10;
console.log(a);
