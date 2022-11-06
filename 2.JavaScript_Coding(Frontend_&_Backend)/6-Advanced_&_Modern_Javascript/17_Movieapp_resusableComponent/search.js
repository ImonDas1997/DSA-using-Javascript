//we are implementing debouncing techique here.

//serch api with poarameter
//a
//av
//ave
//aven
//avege
//avengers
//we will bounce 1 ,2 ,3 records and so on because previous api calls are invalid once we type new keyward we need new reselt from api....

import { navbar } from "./components/navbar.js";
let navbar_div = document.getElementById("topnav");
navbar_div.innerHTML = navbar();
//importing navbar here

async function search_movie() {
  let loder_div = document.getElementById("loader_div");
  loder_div.style.display = "block";
  let movie_name = document.getElementById("live_search").value;
  try {
    let response = await fetch(
      `https://www.omdbapi.com/?apikey=c32921b4&s=${movie_name}`
    );

    let data = await response.json();
    let actual_data = data.Search; //search is the key inside the data object..if u go inside and see from responce u will see that ..
    append_movie(actual_data);
  } catch (err) {
    console.log(err);
  }
}

//----------------------------------------------------------
let id;
function debounce(func, delay) {
  //func-> searchMovies ()
  //a->debounce->sTimeout('a')->7-> searchMovies ('a')
  //av-> debounce->setTimeout('av')->searchMovies ('av')
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(function () {
    func();
  }, delay);
}
//manually adding eventListners in the js file because we use import export who has type=module
let inputBox = document.getElementById("live_search");
inputBox.addEventListener("input", function () {
  debounce(search_movie, 1000);
});
let search_div = document.getElementById("button");
search_div.style.display = "none";

//dev tool go for network tab and go for fetch tab and serch with all parameter u will see all query string item and passing and calling api...

//--------------------------------------------------------------

function append_movie(data) {
  let loder_div = document.getElementById("loader_div");
  loder_div.style.display = "none";
  let m_div = document.getElementById("movies");
  m_div.innerHTML = null;
  data.forEach(function (el) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.Poster;

    let p_name = document.createElement("p");
    p_name.innerText = el.Title;
    let btn = document.createElement("BUTTON");
    btn.innerText = "Book Now";
    div.append(img, p_name, btn);
    m_div.append(div);
  });
}
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//------------------------------------------this is just for carusal-->u can ignore it just.!!!
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
