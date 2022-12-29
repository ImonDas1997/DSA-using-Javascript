// A Rhombus is a flat shape with 4 equal straight sides. A rhombus looks like a diamond. All sides have equal length. Opposite sides are parallel, and opposite angles are equal (it is a Parallelogram)

// Given a digit n, form a rhombus.

// The rules for forming the rhombus are:

// - n should be present in the centre of the rhombus

// - digits should decrease as they approach the edges of rhombus

// For example, for n = 5 the pattern should look like shown below:

// Screenshot.png



// You have to write a program that prints a pattern for a given value of n


// Input
// Input Format

// The first line contains the single integer n

// Constraints

// 2 ≤ n ≤ 9


// Output
// Print a picture for the given n. You should strictly observe the number of spaces before the first digit on each line.

// Every two adjacent digits in the same line should be separated by exactly one space.

// There should be no spaces after the last digit at the end of each line.


// Sample Input 1 

// 2
// Sample Output 1

//     0
//   0 1 0
// 0 1 2 1 0
//   0 1 0
//     0

function rhombus(n) {
  //write code here
  let a = "";
  for (i = 0; i <= n; i++) {
    for (j = 0; j <= i; j++) {
      a += " " + " " + j;
    }
    for (j = i; j > 0; j--) {
      a += " " + (j - 1);
    }
    a += " " + " " + "\n";
  }
  for (i = n - 1; i >= 0; i--) {
    for (j = 0; j <= i; j++) {
      a += " " + j;
    }
    for (j = i; j > 0; j--) {
      a += " " + " " + (j - 1);
    }
    a += "" + "\n";
  }
  console.log(a);
}