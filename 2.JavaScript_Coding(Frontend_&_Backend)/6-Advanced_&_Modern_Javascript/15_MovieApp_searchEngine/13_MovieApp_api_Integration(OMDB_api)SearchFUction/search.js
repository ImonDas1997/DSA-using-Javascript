async function search_movie() {
  let loder_div = document.getElementById("loader_div");
  loder_div.style.display = "block";
  let movie_name = document.getElementById("movie_name").value;
  try {
    let response = await fetch(
      `https://www.omdbapi.com/?apikey=c32921b4&s=${movie_name}`
    );
    console.log(response);
    let data = await response.json();
    let actual_data = data.Search; //search is the key inside the data object..if u go inside and see from responce u will see that ..

    console.log(actual_data);
    append_movie(actual_data);
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
