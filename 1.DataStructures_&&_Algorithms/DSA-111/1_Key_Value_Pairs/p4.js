// Mapping values:

// Given a str find its value, where value of a string is the sum of the characters values. Char values are a-1, b-2, c-3, ...., z-26.

let str = "masai"; // 43

let lower = "abcdefghijklmnopqrstuvwxyz";
let map = {};
for (let i = 0; i < 26; i++) {
  map[lower[i]] = i + 1;
}
console.log(map);

let total = 0;
for (let el of str) {
  total += map[el];
}
console.log(total);

//---------------------------------------------------------

