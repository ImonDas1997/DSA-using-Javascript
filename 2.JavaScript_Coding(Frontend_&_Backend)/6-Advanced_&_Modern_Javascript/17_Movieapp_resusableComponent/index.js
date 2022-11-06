import { navbar } from "./components/navbar.js";
let navbar_div = document.getElementById("topnav");
navbar_div.innerHTML = navbar();

//importing navbar here
const movies = [
  {
    name: "Babli Bouncer",
    rating: 8,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7383/1357383-v-6c8546f2e7bd",
  },
  {
    name: "Beyhad",
    rating: 8.5,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1299/1351299-v-8d0bbbc730da",
  },
  {
    name: "Beyhad",
    rating: 8.5,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6536/846536-v",
  },
  {
    name: "Baaghi3",
    rating: 8.5,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/6828/556828-v",
  },
  {
    name: "Mission mangal",
    rating: 8.5,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1529/571529-v",
  },
  {
    name: "Tanhaji",
    rating: 8.5,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7676/647676-v",
  },
];

let carousel_div = document.getElementById("carousel");

function carousel() {
  //all of this images should be visible one by one?
  //how can i access first image? -> images [0]
  //how can i access third image? images [2]
  //how long until i append second image? →> 3 seconds
  let images = [
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/9119/1329119-h-ef64fcf3d1f9",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/7976/1317976-h-e672d8d911fe",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/3064/1323064-h-dcaae091e676",
  ];

  let imgElement = document.createElement("img");
  imgElement.src = images[0];
  carousel_div.append(imgElement);

  //as soon as website open show →> images [0]
  //interval of 3 seconds
  //next image? -> images [1] l

  let i = 1;

  setInterval(function () {
    //show me 1 after 3 seconds
    //show me 2 after 3 seconds
    if (i === images.length) {
      i = 0;
    }

    //append images

    imgElement.src = images[i];
    carousel_div.append(imgElement);
    i++;
  }, 3000);
}
carousel();

function appendMovies(data) {
  let loader_div = document.getElementById("loader_div");
  loader_div.style.display = "none";

  let data_div = document.getElementById("movies");
  data_div.innerHTML = null;
  data.forEach(function (el) {
    let div = document.createElement("div");
    let p_name = document.createElement("p");
    p_name.innerHTML = "Name :" + el.name;
    let p_rating = document.createElement("p");
    p_rating.innerHTML = "Rating :" + el.rating;
    let img = document.createElement("img");
    img.id = "poster";
    img.src = el.img;
    div.append(img, p_name, p_rating);
    data_div.append(div);
  });
}

function sortLH() {
  let data = movies;
  data = data.sort((a, b) => a.rating - b.rating);

  appendMovies(data);
}

function sortHL() {
  let data = movies;
  data = data.sort((a, b) => b.rating - a.rating);
  appendMovies(data);
}

//lets talk dependency in movie app.
//i cannot append data unless i have movies data.
//appendMovies() cannot work unless I have movies data. do we netlfix, hotstar data stored with us?
//we will have to mimick that data is coming to us via server.
//all we need to do is getMovies() execute it after some time.

//you have dependency, you use promise.
let getmeData = new Promise(function (resolve, reject) {
  //three states of promise.
  //1. pending
  //2. resolved
  //3. rejected
  // execute resolve

  //our promise takes time?
  //in our case, promise is we will give you movies data after 3 second
  setTimeout(function () {
    let data = movies;
    if (data != null) {
      resolve(data); // return "data"
    } else {
      reject("ERR : Server could not get movies data"); //just some error msgg
    }
  }, 3000);
});
console.log("getmeData : ", getmeData);

//getmedata is an object created by Promise CF.
//.then eats what?
//then->resolve
//catch -> ->errors
getmeData
  .then(function (success) {
    appendMovies(success);
  })
  .catch(function (error) {
    console.log("error:", error);
  });
//what do you pass to promise?
//function

//what do you pass to callback function?
//resolve, reject

let LowToHighSort = document.getElementById("LH");
LowToHighSort.addEventListener("click", function () {
  sortLH();
});
let HighToLow = document.getElementById("HL");
HighToLow.addEventListener("click", function () {
  sortHL();
});
