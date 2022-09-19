//1. Square Star Pattern in Javascript
// *****
// *****
// *****
// *****
// *****

let n = 5; //---> row or column count
let string = ""; // ---> defining an empty string

for (let i = 0; i < n; i++) {
  // external loop
  for (let j = 0; j < n; j++) {
    // internal loop
    string += "*";
  }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);
