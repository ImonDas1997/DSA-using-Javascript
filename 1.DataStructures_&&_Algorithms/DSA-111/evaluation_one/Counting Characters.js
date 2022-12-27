// You are given an string of size N, of characters from 'a' to 'z'.

// You need to print count of characters of all characters in alphabetical order.

// [UseKey-Value pair based data structure]


// Input
// First line contains T, no of test cases.

// First line of each test case contains N, size of string

// Second line of each test case contains string S.

// Constraints

// 1 <= T <= 10

// 1 <= N <= 10^6


// Output
// For each test case, print space separated count of characters of all characters in alphabetical order on new line.




// Sample Input 1 

// 2
// 5
// aeiou
// 6
// aaeiou
// Sample Output 1

// 1 0 0 0 1 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0
// 2 0 0 0 1 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0
// Hint

// For test case 1

// Count of 'a' is 1, 'e' is 1, 'i' is 1, 'o' is 1, 'u' is 1.

function countChars(N, S) {
  let obj1 = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };
  let obj = {};
  for (i = 0; i < N; i++) {
    if (obj[S[i]] == undefined) {
      obj[S[i]] = 1;
    } else {
      obj[S[i]]++;
    }
  }
  for (j = 0; j < obj1.length; j++) {
    for (k = 0; k < obj.length; k++) {
      if (obj1[j] == obj[k]) {
      }
    }
  }
  let bag = "";
  for (let o in obj1) {
    bag += obj1[o] + " ";
  }
  console.log(bag);
}