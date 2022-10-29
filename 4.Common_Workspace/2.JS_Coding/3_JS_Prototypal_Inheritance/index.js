// ptototype show all inormation for exmple--> Array,string,number has how many methods  in it ....go  explore it ..
//its gives u all internal information.

//it  will be always objects

//filter, find, foreach, map, reduce etc.

// let str = 'heloo world';

//concat, split, uppercase, trim, join, replace

//string, number, array, function.

//object

//this is what we do
let str = "hello world";
console.log("str:", str);
//this is what js does internally

let str2 = new String("hello"); //we got prototype normally js dowsnot show this .//now we are seeing internal details
//all  methods are stored in prototypes-->*********
console.log("str2:", str2);

//console.log(console); //just go see how many methods are there on console. just prototype will give u all idea

// ptototype show all inormation for exmple--> Array,string,number has how many methodson it ....go  explorfe it ..

// We can use Js inheritance in two ways :
// 1. Constructor Functions
// 2. Object.create() method

//inheritance using constructor function -->******************
//Recall constructor function--->constructor function alwayscrete objects.always 'this' and 'new' (ram and sita ki jodi)

function nikeProduct(n, p) {
  this.name = n; //this we used here for constructor function
  this.price = p;
}
nikeProduct.prototype.discount = function () {
  //we shoud store it in proper place which is in prototype.
  console.log("20% discount on this");
};

let p1 = new nikeProduct("shoes", 2000); //we used new because  of constructio function
console.log("p1:", p1);
p1.discount(); //this is right awy how u call function inside a constructor  function..
let p2 = new nikeProduct("shoes", 2000);

//String as per line 21 is CF? -> YES
//That CF created an object - yes
//on that object you get methods - yes
//where Js creators have stored it - prototype

//where we are storing the methodds right now? - directly
//are we going the against js architecture? - yes
//whats the ideal place to store? - prototypoe -->>****

//How?

//Let's hack.
let name = new String("hellow");
//who is father of name -> String
//what is String -> CF (constroctor functin)
//where are all the methods stored in CF-> prototype
//if we want to add our own method, where we need to add > prototype
//how can we add a method to prototype?
String.prototype.imon = function () {
  //we have added our own function and addedin prototype
  console.log(this.toString());
};
//we are going to use our imon function
name.imon(); //o/p is hellow

let str3 = "nitish"; //let str3 = new String('nitish)

// str3.imon();

//---------------------------------------------------------------------------------->

let arr = ["prabal", "sumit", "shagun", "abhinav"];

let arr2 = ["ronaldo", "messi", "neymar", "chettri"];

Array.prototype.luckyDraw = function () {
  let random_index = Math.round(Math.random() * 3);

  console.log(this[random_index]);
};

arr2.luckyDraw(); //created our own function and added it in prototype and use it in array...so amezing it works.
