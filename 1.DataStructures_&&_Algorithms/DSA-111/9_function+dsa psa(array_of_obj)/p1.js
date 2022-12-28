function names(...a) {
  let sum = 0;
  for (let el of a) {
    sum += el;
  }
  console.log(a);
}

let c = 5;
let d = 6;
let e = 4;
let j = 10;
let k = 8;
let f = 9;
names(c, d, e, j, k, f);
