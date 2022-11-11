async function search_movie() {
  let movie_name = document.getElementById("search").value;
  try{
let r = await fetch(
      `https://www.omdbapi.com/?apikey=c32921b4&s=${movie_name}`
    );
    console.log(r);
    let data = await r.json();
    let actual_data =  data.Search;
 append_movie(actual_data);
 console.log(actual_data);
  } catch(err){
console.log("error",err)
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
    btn.innerText="Book Now"
    div.append(img, p_name, btn);
    m_div.append(div);
  });
} 
if (localStorage.getItem("amount" == null)) {
  bal = 0;
} else {
  bal = localStorage.getItem("amount");
}
document.querySelector("h1").innerText = bal;    
  


      
