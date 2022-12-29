// At masai we say that a number is dominating in an array if it appears in the array most number of times, i.e. the count of this number in this array if greater than all others in the array.

// You are given an array of size n.

// If there exists a dominating number in the array output YES else NO


// Input
// Input Format
// The first line of input will contain a single integer T, denoting the number of test cases.

// Each test case consists of a two lines of input.

// The first line of each test case contains an integer n — the size of the array.

// The second line of each testcase contains n space separated integers, denoting the elements of the array.

// Constraints
// 1 <= T <= 100

// 1 <= N <= 10^5

// 1 <= elements of array <= 10^7


// Output
// Output Format
// If there exists a dominating number in the array output YES else NO


// Sample Input 1 

// 2
// 5
// 1 2 2 2 2
// 5
// 1 2 2 3 3
// Sample Output 1

// YES
// NO
// Hint

// Test case 1

// 2 is the dominant element because two is occurring three times which is greater than any other element in the array.

// Hence the output isYES

// Test case 2

// 2 is occurring two times and 3 is also occurring two times which is equal and there is no other dominant element that occurs more than two times in the array

// Hence the output isNO