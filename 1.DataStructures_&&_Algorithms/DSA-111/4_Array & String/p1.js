// Given an array print all the elements that are in the even indexes.

// Given an array print the sum of elements that are in the even indexes.

let arr = [1, 2, 3, 10, 20, 100];

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (i % 2 == 0) {
    sum += arr[i];
  }
}
console.log(sum);
