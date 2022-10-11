// You are given an array, stored in a variable with the namearray

// The size of the array is stored in a variable with the nameN

// The array contains only two types of numbers,1'sand0's

// You have to find the number of indexes where the value stored is 1, and the number of indexes where the value stored in 0

// Print the output according to the following condition

// 1. If the number of indexes where 1 is present is more than the number of indexes at which 0 is present, print "Tom", without quotes

// 2. Else if the number of indexes where 0 is present is more than the number of indexes at which 1 is present, print "Jerry", without quotes

// 3. If the number of indexes where 1 is present is equal to the number of indexes at which 0 is present, print "Another round", without quotes

// Hint ---->
// In the first sample test case, the value stored in N = 10, and thearray = [1 1 1 1 1 0 0 0 0 0]. The number of times 1 is present in the array is 5, and the number of times 0 is present in the array is also 5. Therefore, the output becomesAnother round

// In the second sample test case, the value stored in N = 5, and thearray = [1 0 1 0 1]. The number of times 1 is present is 3, and the number of times 0 is present is 2. Since, 1 is present more number of times, therefore, the output becomesTom

// sample Input
// 10
// 1 1 1 1 1 0 0 0 0 0

//sample output
// Another round
function tomNJerry(N, array) {
  let countZero = 0;
  let countOne = 0;
  for (i = 0; i < N; i++) {
    if (array[i] == 1) {
      countOne++;
    } else {
      countZero++;
    }
  }
  if (countOne > countZero) {
    console.log("Tom");
  } else if (countOne < countZero) {
    console.log("Jerry");
  } else if (countOne == countZero) {
    console.log("Another round");
  }
}

tomNJerry(10, [1, 1, 1, 1, 1, 0, 0, 0, 0, 0]);
