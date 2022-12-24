// Problem 1 : variant

let studentsArr = ["chunnu", "munnu", "pablo"];
let ageArr = [15, 16, 55];
let marksArr = [80, 45, 10];

let arr = [];
for (let i = 0; i < ageArr.length; i++) {
  let obj = {};
  obj["name"] = studentsArr[i];//brackets notation
  obj.age = ageArr[i];// dot notation
  obj["marks"] = marksArr[i];
  arr.push(obj);
}
console.log(arr);
