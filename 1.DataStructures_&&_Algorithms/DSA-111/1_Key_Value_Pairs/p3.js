// Missing Vowels

// Given a str of lowercase english alphabets find out the vowels that are missing froom the str.

let str = "education";
let vowels = { a: 1, e: 1, i: 1, o: 1, u: 1 };

// for of
for (let el of str) {
  delete vowels[el];
}
let bag = "";
for (let key in vowels) {
  bag += key;
}
console.log(bag || -1);

// // howmwork  try to uderstand below code using BRUTE FORCE-->

// let str = 'masai'  // eou

// let vowels = 'aeiou';
// let bag = '';
// for(let i=0;i<vowels.length;i++){
//   let flag = false;
//   for(let j=0;j<str.length;j++){
//     if(vowels[i] == str[j]) {
//       flag = true;
//     }
//   }
//   if(flag == false){
//     bag += vowels[i]
//   }
// }
// console.log(bag)
