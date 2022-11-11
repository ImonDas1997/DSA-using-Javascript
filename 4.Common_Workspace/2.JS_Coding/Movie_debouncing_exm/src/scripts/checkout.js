let BookmovieArr = JSON.parse(localStorage.getItem("BookMOvie")) || [];
console.log(BookmovieArr);

function append_movie(BookmovieArr) {
  let m_div = document.getElementById("movies");
  m_div.innerHTML = null;
  BookmovieArr.forEach(function (el) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.Poster;

    let p_name = document.createElement("p");
    p_name.innerText = el.Title;
    let btn = document.createElement("BUTTON");
    btn.innerText = "Movies In your cart";
    
    div.append(img, p_name, btn);
    m_div.append(div);
  });
}

append_movie(BookmovieArr);
