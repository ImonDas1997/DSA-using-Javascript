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
  createButtons(data.length,2);
};
// http://localhost:3000/posts →> JON

getData();
//if we have 100 images
 //2 images per page
  let buttons_div = document.getElementById('buttons');

const createButtons = (total_images, images_per_page) => {
  const buttons = Math.ceil(total_images / images_per_page);
  for (let i = 1; i <= buttons; i++) {
    let btn = document.createElement("button");
    //we need to know which button user clicked
    //identity
    btn.id = i;
    //naamkaran
    btn.innerText = i;
    //kartawya
    btn.onclick = () => {
      console.log(i);
    };
    buttons_div.append(btn);
  }
};
