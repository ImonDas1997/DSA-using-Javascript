let obj = {
  name: "sinchsn",
  age: 5,
  isMale: true,
};

delete obj.isMale;

delete obj["age"];
console.log(obj);
