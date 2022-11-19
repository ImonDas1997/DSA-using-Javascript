function mobile(n, b, p, i) {
  this.name = n;
  this.brandName = b;
  this.price = p;
  this.image = i;
}




function storeData(el) {
  el.preventDefault();
  let form = document.getElementById("mobile_form");
  let name = form.mobile_name.value;
  let brandname = form.mobile_brand.value;
  let brandpr = form.mobile_price.value;
  let img = form.mobile_image.value;
  let list = new mobile(name, brandname, brandpr, img);

  let data = JSON.parse(localStorage.getItem("mobile_data")) || [];
  data.push(list);
  localStorage.setItem("mobile_data", JSON.stringify(data));
  console.log(list);
  form.mobile_name.value = "";
  form.mobile_brand.value = "";
  form.mobile_price.value = "";
  form.mobile_image.value = "";
}
