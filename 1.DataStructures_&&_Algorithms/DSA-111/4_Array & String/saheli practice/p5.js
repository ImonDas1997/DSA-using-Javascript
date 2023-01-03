// Given a string you have to generate two strings
// One with all the vowels and another with all the consonants

let str = "nature";

// Output => aue ntr
let vowels = "";
let cons = "";

for (let el of str) {
  if (el == "a" || el == "e" || el == "i" || el == "o" || el == "u") {
    vowels += el;
  } else {
    cons += el;
  }
}

console.log(vowels, cons);
