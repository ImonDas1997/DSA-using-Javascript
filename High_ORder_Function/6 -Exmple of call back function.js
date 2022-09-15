function bringSoup() {
  console.log("Bring veg and NV soup")
}

function bringBiryani() {
  console.log("Bring Mixed biryanu")
}

function bringIceCream() {
  console.log("bring choclate icecream")
}

function bringBill() {
  console.log("get the bill")
}

function hotel(a, b, c, d) {
  a() //===>invoking....
  b()//===>invoking....
  c() //===>invoking....
  d() //===>invoking....
}
hotel(bringSoup, bringBiryani, bringIceCream, bringIceCream)//-->here all are call back function....whoever function are passing as argument we call it call back function.