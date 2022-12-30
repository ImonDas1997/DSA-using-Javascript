// Given a string find out if the string has two consecutive vowels

let str = "masai";

// Output => true

let flag = false;

for (let i = 0; i < str.length; i++) {
  if (
    (str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u") &&
    (str[i + 1] == "a" ||
      str[i + 1] == "e" ||
      str[i + 1] == "i" ||
      str[i + 1] == "o" ||
      str[i + 1] == "u")
  ) {
    flag = true;
    break;
  }
}
console.log(flag);
