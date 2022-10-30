// // **Sample Output**
// {a: 400, b: 400, c: 300, d: 400}

// **Sample Input**
let d1 = { a: 100, b: 200, c: 300 };
let d2 = { a: 300, b: 200, d: 400 };

// pass by ref vs pass by value--->****

let copy = {}; // Copy of d1
for (let key in d1) {
  copy[key] = d1[key];
}

for (let key in d2) {
  // Key = "d"
  if (copy[key]) {
    copy[key] += d2[key];
  } else {
    copy[key] = d2[key];
  }
}
console.log(copy);

// any value truthy
