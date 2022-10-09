// returning a function vs 
// consoling a function ***************
//-----------------------------------------------------------
//look at the senario..i cant do this..i cant console a function who is having a console.log so i will not give ans..so alwatys i have to (return value from function and console log it) or just call the function simply.
let x1 = function()//-----not correct----------
{
  console.log("I am another way of writing fun")
}
console.log(x1);//you will not get ans because u r consoling  2 time from both the place.


//--------------------------------------------------------------
//this is the proper way of writing function----correct-------
let x = function()//--this line we are storing function in a variable
{
  console.log("I am another way of writing fun")
}
x();//-->invoking.
//OR
let x = function() {
  res = "I am another way of writing fun";
  return res;
}
console.log(x());
//---------------------------------------------------