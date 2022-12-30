// Given an array of integers ranging from 1 to 5, you have to determine the element with the highest frequency. And if more than 1 element has the highest frequency print the element with the smallest value.


// Input
// Input Format

// First-line contains T, no of test cases.

// First-line of each test case contains an integer numbers n - the size of the array.

// Second-line of each test case contains n integer numbers a1, a2, ... an — elements of the array.

// Constraints

// 1 <= T <= 10

// 1 <= n <= 10^6

// 1 <= a[i] <= 5


// Output
// For each test case print the element with the highes frequency in a new line.


// Sample Input 1 

// 2
// 6
// 1 4 4 4 5 3
// 11
// 1 2 3 4 5 4 3 2 1 3 4
// Sample Output 1

// 4
// 3
// Hint

// For the first test case,

// The different types of elements occur in the following frequencies:

// Type: 1 Frequency : 1
// Type: 2 Frequency : 0
// Type: 3 Frequency : 1
// Type: 4 Frequency : 3
// Type: 5 Frequency : 1
// The type number that occurs at the highest frequency is type 4, so we print 4 as our answer.



// For the second test case,

// The different types of elements occur in the following frequencies:

// Type: 1 Frequency : 2
// Type: 2 Frequency : 2
// Type: 3 Frequency : 3
// Type: 4 Frequency : 3
// Type: 5 Frequency : 1
// Two types have a frequency of 3, and the lower of those is type 3.

function highFrequency(n, a) {
  let obj = {};
  for (i = 0; i < n; i++) {
    if (obj[a[i]] == undefined) {
      obj[a[i]] = 1;
    } else {
      obj[a[i]]++;
    }
  }
  let max = -Infinity;
  let bag = "";
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      bag = key;
    }
  }
  console.log(bag);
}