
let data = JSON.parse(localStorage.getItem("mobile_data")) || [];
function append(data) {
  
  let container = document.getElementById("mobile_list");
  container.innerHTML = null;

  data.forEach(function (el, index) {
    let div = document.createElement("div");
    div.setAttribute("class", "mobile");
    let img = document.createElement("img");
    img.src = el.image;
    img.style.height = "30vh";
    img.style.width = "30vh";
    let p = document.createElement("p");
    p.innerText = el.name;
    let brand = document.createElement("p");
    brand.innerText = el.brandName;
    let pr = document.createElement("p");
    pr.innerText = el.price;
    let btn = document.createElement("button");
    btn.setAttribute("class", "remove");
    btn.innerText = "Remove";
    btn.addEventListener("click", function () {
      remove(index);
    });
    div.append(img, p, brand, pr, btn);
    container.append(div);
  });
}
append(data);


function remove(index) {
  let data = JSON.parse(localStorage.getItem("mobile_data")) || [];
  let newData = data.filter(function (el, i) {
    if (i === index) {
      let trash = JSON.parse(localStorage.getItem("trash")) || [];
      localStorage.setItem("trash", JSON.stringify(trash));
    } else {
      return i != index;
    }
  });
  localStorage.setItem("mobile_data", JSON.stringify(newData));
  let data1 = JSON.parse(localStorage.getItem("mobile_data")) || [];
  append(data1);
}

function sortLH(){
    let data = JSON.parse(localStorage.getItem("mobile_data")) || [];
    console.log(data);
   data= data.sort((a, b) => a.price - b.price);

    append(data);
    console.log(data);
}

function sortHL() {
  let data = JSON.parse(localStorage.getItem("mobile_data")) || [];
  data = data.sort((a, b) => b.price - a.price);
  append(data);
  console.log(data);
}

let lowToHigh = document.getElementById("sort_lth");
lowToHigh.addEventListener("click", function(){
    sortLH();
});

let highToLow = document.getElementById("sort_htl");
highToLow.addEventListener("click", function () {
  sortHL();
});