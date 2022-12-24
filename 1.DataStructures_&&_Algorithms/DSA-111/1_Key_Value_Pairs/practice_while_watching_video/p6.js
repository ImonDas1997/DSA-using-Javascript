let obj = {
  name: "sinchan",
  age: 5,
  hobbies: ["dancing", "watching TV", "sleeping", "playing"],
};

// Given array print the element at the index 5

for (let key in obj) {
  //console.log(key+":"+obj.key)//undefined
  console.log(key + ":" + obj[key]);
}
