//Given a string of lowercase characters
// Print all the missing vowels using objects

let str = "masai";
let vowels = { a: 1, e: 1, i: 1, o: 1, u: 1 };

for (let key of str) {
  delete vowels[key];
}

let bag = "";
for (let a in vowels) {
  bag += a;
}
console.log(bag);
