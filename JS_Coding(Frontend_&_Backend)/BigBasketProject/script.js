let itemData = [
  {
    id: 1,
    image_url:
      "https://www.bigbasket.com/media/uploads/p/s/40026603_9-bb-royal-cuminjeera-whole.jpg",
    name: "Cumin// - Whole",
    price: 3120,
  },
  {
    id: 2,
    image_url:
      "https://www.bigbasket.com/media/uploads/p/s/10000200_17-fresho-tomato-hybrid.jpg",
    name: "Tomato - Hybrid",
    price: 1320,
  },
  {
    id: 3,
    image_url:
      "https://www.bigbasket.com/media/uploads/p/s/40208261_1-borges-extra-virgin-olive-oil.jpg",
    name: "Extra Virgin ",
    price: 110,
  },
  {
    id: 4,
    image_url:
      "https://www.bigbasket.com/media/uploads/p/s/10000070_15-fresho-carrot-orange.jpg",
    name: "Carrot - Orange",
    price: 120,
  },
  {
    id: 5,
    image_url:
      "https://www.bigbasket.com/media/uploads/p/s/40072320_2-fresho-farm-eggs-table-tray-medium-antibiotic-residue-free.jpg",
    name: "Farm Eggs ",
    price: 1120,
  },
  {
    id: 6,
    image_url:
      "https://www.bigbasket.com/media/uploads/p/s/40129678_7-pampers-diaper-pants-extra-large.jpg",
    name: "Greek Yogurt ",
    price: 120,
  },
  {
    id: 7,
    image_url:
      "https://www.bigbasket.com/media/uploads/p/s/1203441_1-fresho-onion-1-kg-new-potato-1-kg-tomato-hybrid-1-kg.jpg",
    name: "Onion 1 kg ",
    price: 420,
  },
  {
    id: 8,
    image_url:
      "https://www.bigbasket.com/media/uploads/p/s/10000269_31-fresho-pomegranate.jpg",
    name: "Pomegranate",
    price: 720,
  },
  {
    id: 9,
    image_url:
      "https://www.bigbasket.com/media/uploads/p/s/10000273_16-fresho-mushrooms-button.jpg",
    name: "Mushrooms - Button",
    price: 820,
  },
  {
    id: 10,
    image_url:
      "https://www.bigbasket.com/media/uploads/p/s/10000031_21-fresho-banana-yelakki.jpg",
    name: "Bannana - Button",
    price: 620,
  },
  {
    id: 11,
    image_url:
      "https://www.bigbasket.com/media/uploads/p/s/40128515_8-pampers-diaper-pants-large.jpg",
    name: "Diaper Pants ",
    price: 220,
  },
  {
    id: 12,
    image_url:
      "https://www.bigbasket.com/media/uploads/p/s/10000446_17-bb-royal-peanutsmungaphalishengdana-raw.jpg",
    name: "Peanuts - Raw",
    price: 20,
  },
];
let cartArr = JSON.parse(localStorage.getItem("cart_items")) || []; 

itemData.forEach(function (el) {
  let card = document.createElement("div");
  let productImg = document.createElement("img");
  productImg.src = el.image_url;
  let title = document.createElement("h3");
  title.innerText = el.name;
  let price = document.createElement("p");
  price.innerText = "Price :"+el.price;
  let delivery = document.createElement("p");
  delivery.innerText = "Standard Delivery:Tomorrow";

  let btn = document.createElement("button");
  btn.addEventListener("click", function () {
    addToCart(el);
  });
  card.append(productImg, title, price, delivery,btn);
  btn.innerText = "Add to Cart";
  document.querySelector("#item").append(card);
});

function addToCart(el) {
  cartArr.push(el);
  localStorage.setItem("cart_items", JSON.stringify(cartArr));
}
let cartTotal = JSON.parse(localStorage.getItem("cart_items"));
document.querySelector("#idid").innerText = cartTotal.length;
document.querySelector("#idid").style.color = "red";
let total_price = cartTotal.reduce(function (acc, el) {
  return acc + el.price;
}, 0);
document.querySelector("#rr").innerText = total_price;
document.querySelector("#rr").style.color = "red";

let name = localStorage.getItem("name") ? localStorage.getItem("name") : "";
console.log(name);
if (name == "") {
  alert("U need to login first");
  window.location.href = "Login.html";
}

function Logout() {
  localStorage.removeItem("name");
  localStorage.removeItem("email");
  window.location.href = "Login.html";
}
