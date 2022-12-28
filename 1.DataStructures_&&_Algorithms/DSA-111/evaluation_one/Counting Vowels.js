// You are given a stringstrof sizeN, of characters from 'a' to 'z'.

// You need to print the count of vowels. ('a', 'e', 'i', 'o', 'u')

// For Example:

// str="abcde", N=5in this case the frequency ofais 1,eis 1,iis 0,ois 0 anduis 0.

// Thus the output will be1 1 0 0 0


// Input
// The first line contains T, no of test cases.

// The first line of each test case contains `N`, the size of the string

// The second line of each test case contains the string `str`.

// Constraints

// 1 <= T <= 10

// 1 <= N <= 10^6


// Output
// For each test case, print space separated count of 'a', 'e', 'i', 'o', 'u' on new line

// Sample Input 1 

// 2
// 5
// aeiou
// 8
// applepie
// Sample Output 1

// 1 1 1 1 1
// 1 2 1 0 0
// Hint

// For test case 1

// str="aeiou", N=5

// Count of 'a' is 1, 'e' is 1, 'i' is 1, 'o' is 1, 'u' is 1.

// Thus output is1 1 1 1 1

// For test case 2

// str="applepie", N=8

// Count of 'a' is 1, 'e' is 2, 'i' is 1, 'o' is 0, 'u' is 0.

// Thus output is1 2 1 0 0

function countingVowels(N, str) {
  let countA = 0;
  let countE = 0;
  let countI = 0;
  let countO = 0;
  let countU = 0;
  for (i = 0; i < N; i++) {
    if (str[i] == "a") {
      countA++;
    } else if (str[i] == "e") {
      countE++;
    } else if (str[i] == "i") {
      countI++;
    } else if (str[i] == "o") {
      countO++;
    } else if (str[i] == "u") {
      countU++;
    }
  }
  console.log(countA, countE, countI, countO, countU);
}
