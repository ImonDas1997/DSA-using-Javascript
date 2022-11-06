function appendMovies(data) {
  let loder_div = document.getElementById("loader_div");
  loder_div.style.display = "none";
  let m_div = document.getElementById("movies");
  m_div.innerHTML = null;
  data.forEach(function (el) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.Poster;
    img.style.height = "30vh";

    let p_name = document.createElement("p");
    p_name.innerText = el.Title;
    let btn = document.createElement("BUTTON");
    btn.innerText = "Book Now";
    div.append(img, p_name, btn);
    m_div.append(div);
  });
}

export { appendMovies };
