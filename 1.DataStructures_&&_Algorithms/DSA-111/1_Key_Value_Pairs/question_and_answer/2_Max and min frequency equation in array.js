// You are given an array stored in a variable with the namearr

// The size of the array is stored in a variable with the nameN

// You have to solve the equation -15*x + 2*y, where x is the smallest frequency of an element in the array, while

// y is the largest frequency of an element in the array

// For example, consider the value stored inN = 7, andarr = [1 2 2 3 3 3 5]

// The frequency of the different elements in the array are

// 1 -> 1
// 2 -> 2
// 3 -> 3
// 5 -> 1

// The smallest frequency in the array is1, with elements1, and 5 with frequency 1, while the largest frequency in the array is 3
// as3 has a frequency 3. So, the value ofx = 1, and the value ofy = 3

// Therefore, the value of the equation becomes -15*[1] + 2*[3] = 21, which is the required output

// Input
// The first line of the input contains the value stored inN

// The next line contains the values stored inarr


// Output
// Find the value of the equation given in the problem statement, as explained in the problem statement

// Sample Input 1 

// 7
// 1 2 2 3 3 3 5
// Sample Output 1

// 21
// Hint

// In the sample test case, the value stored inN = 7, andarr = [1 2 2 3 3 3 5]

// The frequency of the different elements in the array are

// 1 -> 1
// 2 -> 2
// 3 -> 3
// 5 -> 1

// The smallest frequency in the array is1, with elements1, and 5 with frequency 1, while the largest frequency in the array is 3
// as3 has a frequency 3. So, the value ofx = 1, and the value ofy = 3

// Therefore, the value of the equation becomes -15*[1] + 2*[3] = 21, which is the required output

// function minMAx(N, arr) {
//   let min = Infinity;
//   let max = -Infinity;
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]] == undefined) {
//       obj[arr[i]] = 1;
//     } else {
//       obj[arr[i]]++;
//     }
//   }
//   for (let key in obj) {
//     if (obj[key] > max) {
//       max = obj[key];
//     }
//     if (obj[key] < min) {
//       min = obj[key];
    
//     }
//   }
//   console.log(max * 2 + min * 15);
// }


function objArr(N,arr){
let min=Infinity;
let max=-Infinity;
let obj={}
for(let i=0;i<arr.length;i++){
    if(obj[arr[i]]==undefined){
        obj[arr[i]]=1;
    }else{
        obj[arr[i]]++
    }
}
}