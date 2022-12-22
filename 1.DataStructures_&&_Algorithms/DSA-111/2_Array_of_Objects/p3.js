
// create an array of objects 
// loop over any array and assign the key value pair
// push that obj into the array

let studentsArr = [ "chunnu", "munnu", "pablo"];
let ageArr = [ 15, 16, 55];
let marksArr = [ 80, 45, 10];

let arr = [];
for(let i = 0; i<studentsArr.length; i++){
  let obj = createObj(studentsArr[i],ageArr[i], marksArr[i]);
  arr.push(obj);
}
console.log(arr);

function createObj(name,age,marks){
  return {name, age, marks}
}

