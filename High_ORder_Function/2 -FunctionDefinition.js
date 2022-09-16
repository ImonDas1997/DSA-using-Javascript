function toFarenheight(c)
  {
    let f=(c*9/5)+32;
    console.log(f);
  }
// toFarenheight(30);
// toFarenheight(50);
// toFarenheight(-9);

// --------------------------------
let tempInCelcious=[0,30,40,67,8,-1];

for(let temp of tempInCelcious)//--using for of loop ->only array and astring directly traverse
  {
    toFarenheight(temp);
    //using array we can get all value
  }

//when a function does not return anything you will get undefined.
//------------------------------------------------------------------------------------
//Anonymous Function
//we can store a function inside a variable that king of function we call Anonymous function


let x = function () {
console.log('call me ! I am Anonymous function')
 }

 function one()
      {
      x();
      }
      one()//-----------> here i am calling one function.
//----------------------------------------------------------------------------------

