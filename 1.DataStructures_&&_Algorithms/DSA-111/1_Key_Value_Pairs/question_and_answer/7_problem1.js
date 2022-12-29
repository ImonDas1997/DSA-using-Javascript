// Write a program to create a object from two arrays.

// **Input :**
// Given two arrays one containing the class names and other containing the values
 
// **Sample Input**
// ['Class-V', 'Class-VI', 'Class-VII', 'Class-VIII']
// [1, 2, 3, 4]

// **Expected Output:** 
// {Class-V: 1 , Class-VI: 2 , Class-VII: 3, Class-VIII: 4}

let arr = ["Class-V", "Class-VI", "Class-VII", "Class-VIII"];
let arr1 = [1, 2, 3, 4];
let obj={};
for(i=0;i<arr.length;i++){
obj[arr[i]]=arr1[i];

}

for(let key in obj){
console.log(key+ ":" + obj[key])
}

