let cart = {
  products: [
    { name: "Dell Laptop", price: 55000, quantity: 1 },
    { name: "Iphone 14 pro max", price: 150000, quantity: 1 },
    { name: "Airpods", price: 10000, quantity: 1 },
    { name: "Feroo Rocher", price: 350, quantity: 83 },
  ],
  total: function () {
    let sum = 0;
    for (let i = 0; i < this.products.lenght; i++) {
      this.products[i];
    }
    return sum;
  },
  discount: function (percent) {
    let total = 90000;
    if (total > 100000) {
      let grandTotal = total - (total * percent) / 100;
      return grandTotal;
    } else {
      return total;
    }
  },
};

console.log(cart.discount(10));
console.log(cart.discount(20));
console.log(cart.discount(100));
// Step 1 : find the total price of all products
// Step 2 : if the person has purchased more than 100000 give him a discount of 10%
