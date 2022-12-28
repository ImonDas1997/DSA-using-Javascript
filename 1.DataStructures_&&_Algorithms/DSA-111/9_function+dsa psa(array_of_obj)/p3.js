// Write a function that takes an argument and returns the value in Fahrenheit
// F = cel * 9/5 + 32;

function celToFahr(celcius) {
  let far = (celcius * 9) / 5 + 32;
  return far;
}

console.log(celToFahr(22));

let arr = [20, 45, 39, -20, 11];
let newArr = [];

for (let el of arr) {
  let ans = celToFahr(el);
  newArr.push(ans);
}
console.log(newArr);
