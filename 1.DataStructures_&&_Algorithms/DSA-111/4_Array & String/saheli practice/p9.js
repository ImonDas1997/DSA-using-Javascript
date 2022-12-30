// Given an array of strings print the reverse of all the strings

let arr = ["apple", "orange", "grapes"];

// Output => elppa egnaro separg

let res = "";
for (let i = 0; i < arr.length; i++) {
  res += revStr(arr[i]) + " ";
}
console.log(res);

function revStr(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}
