// Given an array find out the number of elements whose both the neighbors are even.

let arr = [1, 2, 3, 10, 20, 100];

// Output => 2

let count = 0;

for (let i = 1; i < arr.length - 1; i++) {
  if (arr[i - 1] % 2 == 0 && arr[i + 1] % 2 == 0) {
    count++;
  }
}
console.log(count);
