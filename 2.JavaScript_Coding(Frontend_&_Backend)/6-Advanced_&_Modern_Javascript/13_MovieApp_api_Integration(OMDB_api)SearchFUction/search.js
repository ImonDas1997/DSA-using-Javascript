//we will be usign OMDB api for data....

//1. create search button
//2. setup search.html and search.js
//3. implement slideshow on search.html
//4. create search button
//5. add onclick event handler for above
//6, write searchMovies() function.

//** FETCH IS AKLWAYS A PROMISE .. WHY ??
// BECAUSE IOT TAKES TIME TO GET THE DATYA AND THERE I SPOSSIBILIOTY U GET DATA ALSO YOU MIGHT NOT GET DATA
///WE WILL USE ALWAYS asyn and await

async function search_movie() {
  //who takes us to the server? fetch
  //what is the argument to fetch?
  //do we have the url?
  //standardization
  //http://www.omdbapi.com/?apikey=f3d5c71f&s=avengers
  let loder_div = document.getElementById("loader_div");
  loder_div.style.display = "block";
  let movie_name = document.getElementById("movie_name").value;
  try {
    let response = await fetch(
      `https://www.omdbapi.com/?apikey=c32921b4&s=${movie_name}`
    );
    console.log(response);
    let data = await response.json();
    let actual_data = data.Search;

    console.log(actual_data);
    append_movie(actual_data);

    // fetch returns a promise
    // why fetch is a promise?
    // pending, fullfilled, rejected

    // response is a promise?
    // so promise is a giftbox? yes
    // how do you open promise giftbox? -> yes
  } catch (err) {
    console.log(err);
  }
}

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
