walletBal = {
  price: 0,
};
let cartArr = JSON.parse(localStorage.getItem("amount")) || [];



function add() {
  price = document.getElementById("amount").value;
  a = parseInt(price);
  walletBal.price = a;
  cartArr.push(walletBal);
  localStorage.setItem("amount", JSON.stringify(cartArr));
}

let cartTotal = JSON.parse(localStorage.getItem("amount"));
console.log(cartTotal);
let total_price = cartTotal.reduce(function (acc, el) {
  return acc + el.price;
}, 0);
let b = total_price;
console.log(b);

document.querySelector("#wallet").innerText ="wallet balance = "+ b;
document.querySelector("#wallet").style.color = "red";
