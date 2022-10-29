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
  let script = document.createElement("script");
  script.src = s;
  document.head.append(script);
  console.log("document : ", document);

}
append("/myScript.js");
