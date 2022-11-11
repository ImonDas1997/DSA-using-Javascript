async function search_movie() {
  let movie_name = document.getElementById("search").value;
  try {
    let r = await fetch(
      `https://www.omdbapi.com/?apikey=c32921b4&s=${movie_name}`
    );
    console.log(r);
    let data = await r.json();
    let actual_data = data.Search;
    append_movie(actual_data);
    console.log("actual", actual_data);
  } catch (err) {
    console.log("error", err);
  }
}

function append_movie(data) {
  let m_div = document.getElementById("movies");
  m_div.innerHTML = null;
  data.forEach(function (el) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.Poster;

    let p_name = document.createElement("p");
    p_name.innerText = el.Title;
    let btn = document.createElement("BUTTON");
    btn.innerText = "ADD Movie to cart";
    btn.addEventListener("click", function () {
      addMovie(el);
    });
    div.append(img, p_name, btn);
    m_div.append(div);
  });
}

let cartTotal = JSON.parse(localStorage.getItem("amount"));
console.log(cartTotal);
let total_price = cartTotal.reduce(function (acc, el) {
  return acc + el.price;
}, 0);
let b = total_price;
console.log(b);

document.querySelector("#wallet").innerText = "wallet balance = " + b;
document.querySelector("#wallet").style.color = "red";

const addMovie = async (el) => {
  try {
    BookmovieArr.push(el);
    localStorage.setItem("BookMOvie", JSON.stringify(BookmovieArr));
    window.location.href = "checkout.html";
  } catch (e) {
    console.log(error);
  }
};

let BookmovieArr = JSON.parse(localStorage.getItem("BookMOvie")) || [];

