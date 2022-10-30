//create array of objects using these 3 array

let studentsArr = ["chunnu", "munnu", "pablo"];
let ageArr = [20, 12, 50];
let marksArr = [99, 25, 45];

let arr = []; //here we will push out biject
//threearaay has samelength so i can takeany array for length
for (let i = 0; i < ageArr.length; i++) {
  let name = studentsArr[i];
  let age = ageArr[i];
  let marks = marksArr[i];

  let obj = { name, age, marks }; //we are colectingdata fromdiffrent varialble  through the loop
  arr.push(obj);
}

console.log(arr);
