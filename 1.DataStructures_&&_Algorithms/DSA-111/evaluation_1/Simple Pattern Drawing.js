// You have to write code that draws a Snake for you according to the following rules:

// A snake is a pattern on a n by m table. Denote c-th cell of r-th row as (r, c). The tail of the snake is located at (1, 1), then it's body extends to (1, m), then goes down 2 rows to (3, m), then goes left to (3, 1) and so on.

// The empty cells should be represented as dot characters ('.') and the snake cells should be filled with number signs ('#').

// Consider sample tests in order to understand the snake pattern.


// Input
// Input Format

// The only line contains two integers: n and m.

// n is an odd number.



// Constraints

// 3 ≤ n,m ≤ 50


// Output
// Output Format

// Output n lines. Each line should contain a string consisting of m characters. Do not output spaces.


// Sample Input 1 

// 3 3
// Sample Output 1

// ###
// ..#
// ###
// Sample Input 2 

// 5 3
// Sample Output 2

// ###
// ..#
// ###
// #..
// ###
// Sample Input 3 

// 9 9
// Sample Output 3

// #########
// ........#
// #########
// #........
// #########
// ........#
// #########
// #........
// #########

function snakePattern(n, m) {
  let bag = "";
  for (j = 0; j < m; j++) {
    bag = "";

    if (j % 2 == 0) {
      for (k = 0; k < m; k++) {
        bag += "#";
      }
    } else {
      for (l = 1; l <= m; l++) {
        if (l == m) {
          bag += "#";
        } else {
          bag += ".";
        }
      }
    }

    console.log(bag);
  }
}