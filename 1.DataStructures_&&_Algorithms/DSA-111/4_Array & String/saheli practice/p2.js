// Given an array
// Find the sum of all the elements that themselves are odd but are in even indexes.

let arr = [1, 2, 3, 10, 20, 100];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 && i % 2 == 0) {
    sum += arr[i];
  }
}
console.log(sum);
