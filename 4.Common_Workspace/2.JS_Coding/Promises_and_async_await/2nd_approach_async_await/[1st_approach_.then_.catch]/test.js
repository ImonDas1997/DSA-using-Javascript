// Why Promises in Js?
// Sometimes a piece of code will take 'x' seconds to execute.
//  Depending on the it, we have other piece of code.
//  This other piece of code is dependent on first piece of code.
//a perticualr website wont alow you to go forward untill u do a perticular thing.then promise come in to piture.
// Promises have consequences.
// 1. They will be fullfilled.
// 2. They will not be fullfilled.
// 3. They will be in the process.

// Promise by nature, takes time to fulfill or not fulfill.
//  Basically, we have to WAIT.

function append(s) {
  return new Promise(function (resolve, reject) {
    let script = document.createElement("script");
    script.src = s;
    document.head.append(script);

    script.onload = function () {
      resolve("Script loading done");
    };
    script.onerror = function () {
      reject("Not loaded");
    };
  });
}

async function handleValue() {
  let res = await append("myScript.js");
  console.log("res:", res); //getting it from resolve part...
  hellow(); //succesfully runningscript and we  a re getting data from sctript....
}

handleValue();
//**important noteand recall */


//new Promise() //always start with new keyword when u use promise..
//.then, .catch 
//async await
