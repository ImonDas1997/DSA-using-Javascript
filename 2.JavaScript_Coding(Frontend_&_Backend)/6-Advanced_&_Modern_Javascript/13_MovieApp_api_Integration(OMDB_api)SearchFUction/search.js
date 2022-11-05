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
  let movie_name = document.getElementById("movie_name").value;
  try {
    let response = await fetch(
      `https://www.omdbapi.com/?apikey=c32921b4&s=${movie_name}`
    );
    console.log(response);
    let data = await response.json();
    let actual_data = data.Search;

    console.log(actual_data);

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
