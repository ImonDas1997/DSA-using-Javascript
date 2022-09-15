//Argument vs parameters in function
function sum(a, b) //-->> we call it parameter
{
  console.log(a + b);
}
sum(2, 3);//-->>we call it arguments





//-----------------------------------------------------------
//call back function-->> past a function in a parameter thats all.
function eatBreakfast(item, time, cb) //passing function in parameter this is called call back function(cb)
{
  console.log(item);
  console.log(time);
  cb();//---->invoking function
  console.log("I will eat", item, "as my breakfast at", time);//we cant  print  cb() here because we cant console a function which function itself is consoling.we will get error...so fix is called function should be returning value instade of consoling.
}

function doBrush() {
  console.log("brush your teeth");
}

eatBreakfast("idly", 10, doBrush); // passing arguments to 1st function and checking 





//----------------------------------------------------------------------------------------------------------------------------------------------------------2nd senario where function is returning value...
function eatBreakfast(item, time, cb) {
  console.log(item);
  console.log(time);
  cb();//---->invoking function
  console.log("I will eat", item, "as my breakfast at", time, "and ", cb());//we are able to print cb value becayse function is returning value.
}

function doBrush() {
  res = "brush your teeth";
  return res;
}

eatBreakfast("idly", 10, doBrush); // passing arguments to 1st function and checking 