//we are implementing debouncing techique here.

//serch api with poarameter
//a
//av
//ave
//aven
//avege
//avengers
//we will bounce 1 ,2 ,3 records and so on because previous api calls are invalid once we type new keyward we need new reselt from api....

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
