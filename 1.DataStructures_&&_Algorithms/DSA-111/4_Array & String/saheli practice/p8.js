let str = "masai";

let flag = false;

let obj = { a: 1, e: 1, i: 1, o: 1, u: 1 };

for (let i = 0; i < str.length; i++) {
  if (obj[str[i]] && obj[str[i + 1]]) {
    flag = true;
    break;
  }
}
console.log(flag);
