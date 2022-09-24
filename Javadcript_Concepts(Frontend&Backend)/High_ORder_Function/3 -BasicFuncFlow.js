let len = 5;
let bre = 3;

function perimeter(l, b) {
  let p = 2 * (l + b);
  return p;
}

function area(l, b) {
  let a = l * b;
  return a;
}

console.log(perimeter(len, bre));
console.log(area(len, bre));

//basic function flow

//---------------------->
//Convert string to number ------------>

let nums = ["1", "2", "3", "4"];
let res = nums.map(Number);
console.log(res); //-->[ 1, 2, 3, 4 ]
