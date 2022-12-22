

// Problem 1

let studentsArr = [ "chunnu", "munnu", "pablo"];
let ageArr = [ 15, 16, 55];
let marksArr = [ 80, 45, 10];
let locationArr = ["kolkata", "kolkata", "kolkata"];


// 1. Make an array of objects
// 2. It should be dynamic

// Step 1 : Loop over the array
// Step 2 : Create an object
// Step 3 : Add it in an array

let arr = [];
for(let i = 0; i<ageArr.length; i++){
  let name = studentsArr[i];
  let age = ageArr[i];
  let marks = marksArr[i];
  let location = locationArr[i];


  let obj = { name, age, marks, location };
  arr.push(obj);
}
console.log(arr)

