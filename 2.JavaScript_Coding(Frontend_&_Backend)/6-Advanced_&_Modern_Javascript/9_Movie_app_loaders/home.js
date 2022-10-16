const movies = [
  {
    name: "RRR",
    rating: 8,
    img: "https://media2.bollywoodhungama.in/wp-content/uploads/2022/04/RRR-8-322x402.jpg",
  },
  {
    name: "MSD",
    rating: 8.5,
    img: "https://i.pinimg.com/originals/e7/06/b9/e706b9c1e0531b63020524d492545388.jpg",
  },
];

let carousel_div = document.getElementById("carousel");

function carousel() {
  //all of this images should be visible one by one?
  //how can i access first image? -> images [0]
  //how can i access third image? images [2]
  //how long until i append second image? →> 3 seconds
  let images = [
    "https://cdn.wallpapersafari.com/63/91/EGjUcK.jpg",
    "https://images.unsplash.com/photo-1645788898721-ab7caf5e112a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1659388825256-d33a36d4c281?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
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
  let data_div = document.getElementById("movies");
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
appendMovies(movies);

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

setTimeout(function () {
  let data = movies;
  console.log("data : ", data);
}, 3000);
letgetmeData=newPromise() // newlekhamaneiconstructior function...
