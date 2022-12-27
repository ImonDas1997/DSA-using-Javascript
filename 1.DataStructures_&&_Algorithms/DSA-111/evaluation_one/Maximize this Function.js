// The unit evaluation are here, and you found that your productive study hours is determined by a function :

// F(x) = ax^2+bx+c

// Your Stress level should never cross K, i.e. F(x) <= K, for all x, where x is the hours on which this function depends.

// You need to find out the Maximum number of hours for which you can Study Stress Free.

// In other words, find the maximum value of x for which F(x) <= K


// Input
// Input Format:

// The first line of input will contain T, number of test cases
// The second line of input will contain a, b, c, K



// Constraints:

// 1<=T<=10000

// 1<= a <= 1000

// 1 <=b<= 1000

// 1<= c <= 1000

// 1<= K <= 1000000005


// Output
// Output an integer in a new line for each test case : The maximum hours for which you can study stress free


// Sample Input 1 

// 1
// 1 1 1 20
// Sample Output 1

// 3
// Hint

// In Sample 1:

// a = 1, b = 1, c = 1, K = 20

// if x = 3, then F(3) = 1*3*3+1*3+1 = 13 < K

// if x = 4, then F(4) = 1*4*4+1*4+1 = 21 > K

// So maximum value of x will be 3