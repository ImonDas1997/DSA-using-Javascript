//inside a array if u put multiple objects u can call it array of objects.

let arr = [1, 2, 3, 4, 5];
let arr2 = [{ name: "imon" }, { name: "sneha" }, { name: "riya" }]; //inside array we have multiple objects that can hiold any value....

//how would i be able to access it ?
//i want tp directly access sneha -->
console.log(arr2[1]["name"]); //brackket notation//i get output sneha//this is the way we get value
console.log(arr2[1].name); //this is Dot notation . very simple and same answer.....

//--------------------------------------------------------->

let arr3 = [
  { name: "imon", age: 26 },
  { name: "sneha", age: 22 },
  { name: "riya", age: 20 },
];
// i want to print age of imon

console.log(arr3[0].age); //o/p--> 26

// now i print age and name both.---->

//we can use for off loop-->because index dowsnot matter
for (let obj of arr3) {
  console.log(obj["name"], obj["age"]);//we get o/p-->imon 26,sneha 22,riya 20
}

//coventional loop-->
for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]["name"], arr3[i]["age"]);
}
//----------------------------------------------------------->
