// Why Promises in Js?
// Sometimes a piece of code will take 'x' seconds to execute.
//  Depending on the it, we have other piece of code.
//  This other piece of code is dependent on first piece of code.

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
      hellow(); //dependent on script to get completely loaded
    };
    script.onerror = function () {
      reject("Not loaded");
    };
  });
}
append("/myScript.js");

// solution is -->

// var promise = new Promise()

// Resolve : When promise is fullfilled
// Reject : When promise is rejected
//exmple------------>

// var myPromise = new Promise(function (resolve, reject) {
//   //resolve('gift a laptop')//this is for success
//   reject("Goodbye!");// this is for rejection
// });
// console.log("my Promise : ", myPromise);
