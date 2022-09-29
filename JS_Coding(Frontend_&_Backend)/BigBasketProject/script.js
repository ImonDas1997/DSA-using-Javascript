let itemData = [
  {
    id: 1,
    image_url:
      "https://media.istockphoto.com/photos/close-up-of-fresh-fish-on-a-background-with-selective-focus-picture-id1256523923?k=20&m=1256523923&s=612x612&w=0&h=4Qduq0j3NwGNm0tuIMgPYV9DP2ovXZrEAEia9JwbLtc=",
    name: "Fish",
    price: 1120,
  },
  {
    id: 2,
    image_url:
      "https://media.istockphoto.com/photos/close-up-of-fresh-fish-on-a-background-with-selective-focus-picture-id1256523923?k=20&m=1256523923&s=612x612&w=0&h=4Qduq0j3NwGNm0tuIMgPYV9DP2ovXZrEAEia9JwbLtc=",
    name: "Fish",
    price: 1120,
  },
  {
    id: 3,
    image_url:
      "https://media.istockphoto.com/photos/close-up-of-fresh-fish-on-a-background-with-selective-focus-picture-id1256523923?k=20&m=1256523923&s=612x612&w=0&h=4Qduq0j3NwGNm0tuIMgPYV9DP2ovXZrEAEia9JwbLtc=",
    name: "Fish",
    price: 1120,
  },
  {
    id: 4,
    image_url:
      "https://media.istockphoto.com/photos/close-up-of-fresh-fish-on-a-background-with-selective-focus-picture-id1256523923?k=20&m=1256523923&s=612x612&w=0&h=4Qduq0j3NwGNm0tuIMgPYV9DP2ovXZrEAEia9JwbLtc=",
    name: "Fish",
    price: 1120,
  },
  {
    id: 5,
    image_url:
      "https://media.istockphoto.com/photos/close-up-of-fresh-fish-on-a-background-with-selective-focus-picture-id1256523923?k=20&m=1256523923&s=612x612&w=0&h=4Qduq0j3NwGNm0tuIMgPYV9DP2ovXZrEAEia9JwbLtc=",
    name: "Fish",
    price: 1120,
  },
];
let cartArr = JSON.parse(localStorage.getItem("cart_items")) || null;
itemData.forEach(function (el) {
  let card = document.createElement("div");
  let productImg = document.createElement("img");
  productImg.src = el.image_url;
  let title = document.createElement("h3");
  title.innerText = el.name;
  let price = document.createElement("p");
  price.innerText = el.price;
  let btn = document.createElement("button");
  btn.addEventListener("click", function () {
    addToCart(el);
  });
  card.append(productImg, title, price, btn);
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


