// Given an array find out the number of elements whose both the neighbors are prime.

// Variant => Given an array find out the number of elements for which at least one neighbor is prime.
// Try both

let arr = [2, 6, 7, 10, 9, 11, 13];

// Output =>  1
// Output =>  5

function checkPrime(n) {
  let factor = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      factor++;
    }
  }
  return factor == 2;
}
let count = 0;
for (let i = 1; i < arr.length - 1; i++) {
  if (checkPrime(arr[i - 1]) && checkPrime(arr[i + 1])) {
    count++;
  }
}
console.log(count);
