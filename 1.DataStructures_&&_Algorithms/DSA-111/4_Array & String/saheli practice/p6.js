// Given a string find out if the string has two consecutive similar elements.

let str = "carom";

// Output => true

let flag = false;

for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i + 1]) {
    flag = true;
    break;
  }
}
console.log(flag);
