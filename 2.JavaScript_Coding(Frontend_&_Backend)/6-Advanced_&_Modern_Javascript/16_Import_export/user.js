import { navbar } from "./navbar.js";
document.body.innerHTML = navbar();






async function getData() {
  let parent = document.getElementById("data");
  let res = await fetch("http://jsonplaceholder.typicode.com/users");
  let data = await res.json();
  append(data, parent);
}

function append(data, parent) {
  data.forEach((el) => {
    let p = document.createElement("p");
    p.innerText = el.title;
    parent.appendChild(p);
  });
}
getData();



// import { getData, append } from "./scripts/showData.js";
// import header from "./components/header.js";

// navbar().then((res) => {
//   document.body.innerHTML = res;
//   let response = getData("http://jsonplaceholder.typicode.com/posts");

//   response.then((data) => {
//     let parent = document.getElementById("data");
//     console.log("parent : ", parent);

//     append(data, parent, "posts");
//   });
// });
