// Print the sum of all their powers, from the objects.
// From the created array of objects Print out Who has the highest power and who has lowest power...very easy

let superHeroes = [
  "Superman",
  "Batman",
  "Shaktimaan",
  "Iron-Man",
  "Spiderman",
  "Ant-Man",
];
let ageArr = [30, 35, 50, 52, 19, 35];
let powerLevel = [90, 80, 100, 80, 70, 60];

let arr = [];
for (let i = 0; i < ageArr.length; i++) {
  let name = superHeroes[i];
  let age = ageArr[i];
  let power = powerLevel[i];
  let obj = { name, age, power };
  arr.push(obj);
}

console.log(arr); // till here just collcthing datta from array and pushing it to array as a object
// inshort ucan call tgis process creating array of objects

// Print the sum of all their powers, from the objects.
// Sum of powers
let sum = 0; // take a container to add all sum

// Loop over the arr of objects
for (let obj of arr) {
  // for each obj add power to sum variable
  sum += obj["power"];
}
console.log("sum is --->", sum); // print
//now find min and max power of the heros

let min = Infinity,
  max = -Infinity;
let minAns, maxAns;

for (let obj of arr) {
  if (obj["power"] < min) {
    min = obj["power"];
    minAns = obj["name"];
  }

  if (obj["power"] > max) {
    max = obj["power"];
    maxAns = obj["name"];
  }
}
console.log("Weakest: " + minAns + " " + min);
console.log("Strongest: " + maxAns + " " + max);
