
let min = Infinity;
let max = 0;
let minname = "";
let maxname = "";

for (let el of arr) {
  if (el.gender == "m" && el.salary > max) {
    max = el.salary;
    maxname = el.name;
  } else if (el.gender == "f" && el.salary < min) {
    min = el.salary;
    minname = el.name;
  }
}
console.log(minname, min);
console.log(maxname, max);
