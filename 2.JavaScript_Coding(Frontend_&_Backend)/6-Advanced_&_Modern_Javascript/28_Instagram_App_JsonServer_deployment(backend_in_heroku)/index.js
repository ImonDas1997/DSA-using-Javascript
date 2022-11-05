import { navbar } from "./navbar.js";
import { append } from "./scripts/append.js";
// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 8000;

server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
  console.log("JSON Server is running");
});

let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

//append will need two things
//1. data
let posts_div = document.getElementById("posts");

const getData = async () => {
  let res = await fetch("http://localhost:3000/posts");
  let data = await res.json();
  append(data, posts_div);
  createButtons(data.length, 2);
};
// http://localhost:3000/posts →> JON

const getPaginatedData = async (clicked_button, limit) => {
  let res = await fetch(
    `http://localhost:3000/posts?_page=${clicked_button}&_limit=${limit}`
  );
  let data = await res.json();
  append(data, posts_div);
};

getData();
//to append initial data by default
getPaginatedData(1, 2);

//if we have 100 images
//2 images per page
let buttons_div = document.getElementById("buttons");

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
      getPaginatedData(i, 2);
    };
    buttons_div.append(btn);
  }
};
