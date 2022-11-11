let obj = {
  name: "Bicky",
  age: 26,
  isMale: true,
};

// obj['name'] = "Chunnu"   // Bracket Notation
// console.log(obj)
// obj.name = 'Munnu'
//------------------
//How to get value from object-->
obj.salary = "20 Rs";
console.log(obj);

delete obj.isMale;
console.log(obj);

let x = "age";
delete obj[x];
console.log(obj); //we can do that usign bracket notation only  but not in dot notation.

// let age =  'name';
// let name = 'age';

// console.log(obj.name)  // Bicky
// console.log(obj[name]) // 26
// console.log(obj[age]) // Bicky
// console.log(obj.age) // 26

// console.log(obj["age"])  // Bracket Notation

// console.log(obj["name"])

// // Dot Notaion (Drawback : variables cannot be used)

// console.log(obj.x)

//----------------------------------------------------
//********update value in objectas
//we can update value like this->from the exsisting obj.
// obj["name"] = "Chunnu"; // Bracket Notation
// console.log(obj);
// obj.name = "Munnu";
// console.log(obj);
//-------------------------------------
//*****add value i object
//we ca add somethingn new using this in the exixting object..
// obj["şalary"] = "20 Rs"; //bracket notation
// console.log(obj);

// obj.salary = "20 Rs"; //dot notation
// console.log(obj);
//-------------------------------------
//*****delete value i object
// delete obj.isMale;
// console.log(obj);
