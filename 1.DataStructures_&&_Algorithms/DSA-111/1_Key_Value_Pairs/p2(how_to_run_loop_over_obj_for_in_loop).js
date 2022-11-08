// Loops in Objects

// How ?

let obj = {
  name: "Bicky",
  age: 26,
  hobbies: ["reading", "solving DSA", "watching anime"],
};
//we use for in loop for objects-->
for (let x in obj) {
  console.log(x + "-" + obj[x]);
}

// Given an object find the value for the key "name".

// When ?//where do we use for in loop ?

// 1. When we need multiple items.
// 2. We dont know the key but the value is known.

let fruits = {
  mango: 10,
  banana: 12,
  oranges: 17,
};

for (let x in fruits) {
  if (fruits[x] % 2 == 1) {
    console.log(x);
  }
}
