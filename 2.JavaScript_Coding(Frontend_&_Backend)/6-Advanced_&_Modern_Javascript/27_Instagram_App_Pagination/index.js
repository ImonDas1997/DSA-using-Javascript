import { navbar } from "./navbar.js";
import { append } from "./scripts/append.js";

let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

//append will need two things
//1. data
let posts_div = document.getElementById("posts");
const getData = async () => {
  let res = await fetch("http://localhost:3000/posts");
  let data = await res.json();
  append(data, posts_div);
};
// http://localhost:3000/posts →> JON

getData();
