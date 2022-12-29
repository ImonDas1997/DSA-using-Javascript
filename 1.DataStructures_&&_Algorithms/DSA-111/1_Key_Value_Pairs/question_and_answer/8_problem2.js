// Write a program to combine two objects by adding their values for common keys.

// **Sample Input**
// d1 = {a: 100, b: 200, c:300}
// d2 = {a: 300, b: 200, d:400}

// **Sample Output**
// {a: 400, b: 400, c: 300, d: 400}

// **Explanation**
// d1 = {a: 100, b: 200, c:300}
// d2 = {a: 300, b: 200, d:400}

// In the above given objects, the value for key 'a' is 100 and 300
// thus, we will calculate the sum 100 + 300 = 400 that will be the value for
// key 'a' in final object
// It will go same for other keys also
// {a: 400, b: 400, c: 300, d: 400}
d1 = { a: 100, b: 200, c: 300 };
d2 = { a: 300, b: 200, d: 400 };

for (let key in d2) {
  if (d1[key]) {
    d1[key] += d2[key];
  } else {
    d1[key] = d2[key];
  }
}
console.log(d1);