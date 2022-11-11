const createProduct = async () => {
  let id = document.getElementById("id").value;
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let description = document.getElementById("description").value;
  let delivery = document.getElementById("delivery").value;
  let image = document.getElementById("img").value;

  let send_this_data = {
    id,
    name,
    price,
    description,
    delivery,
    image,
  };
  console.log(send_this_data);

  let res = await fetch("http://localhost:3000/products", {
    method: "Post",
    body: JSON.stringify(send_this_data),
    headers: { "Content-Type": "application/json" },
  });
  let data = await res.json();
  console.log("data:", data);
};

let product_div = document.getElementById("container");
const getData = async () => {
  let res = await fetch("http://localhost:3000/products");
  let data = await res.json();
  append(data, product_div);
};
getData();

const append = (data, container) => {
  container.innerHTMl = null;
  data.forEach((el) => {
    let div = document.createElement("div");
    div.setAttribute("class", "item");

    let image = document.createElement("img");
    image.src = el.image;
    image.style.height = "30vh";
    image.style.width = "30vh";
    let p_name = document.createElement("h2");
    p_name.innerText = el.name;

    let p_price = document.createElement("h2");
    p_price.innerText = el.price;
    p_price.setAttribute("class", "product_price");

    let p_delivery = document.createElement("h2");
    p_delivery.innerText = "Delivery By:" + el.delivery;
    p_delivery.setAttribute("class", "product_delivery");

    let p_description = document.createElement("h2");
    p_description.innerText = el.description;

    let rem_btn = document.createElement("Button");
    rem_btn.innerText = "remove";
    rem_btn.setAttribute("class", "remove_item");

    rem_btn.addEventListener("click", function () {
      deletePost(el.id);
    });
    let update_btn = document.createElement("Button");
    update_btn.setAttribute("class", "update_price");
    update_btn.innerText = "Update Price";
    update_btn.addEventListener("click", function () {
      UpdatePost(el.id);
    });

    div.append(
      image,
      p_name,
      p_price,
      p_delivery,
      p_description,
      rem_btn,
      update_btn
    );
    container.append(div);
  });
};

async function shortLH() {
  let product_div = document.getElementById("container");
  product_div.innerHTML = null;
  let res = await fetch(
    "http://localhost:3000/products?_sort=price&_order=asc"
  );
  let data = await res.json();

  append(data, product_div);
}
async function shortHL() {
  let product_div = document.getElementById("container");
  product_div.innerHTML = null;
  let res = await fetch(
    "http://localhost:3000/products?_sort=price&_order=desc"
  );
  let data = await res.json();

  append(data, product_div);
}
let LH = document.getElementById("sort-low-to-high");
LH.addEventListener("click", function () {
  shortLH();
});
let HL = document.getElementById("sort-high-to-low");
HL.addEventListener("click", function () {
  shortHL();
});

let g4r = document.getElementById("greater-than");
g4r.addEventListener("click", function () {
  g4();
});
let gl4r = document.getElementById("less-than");
gl4r.addEventListener("click", function () {
  gl4();
});

const deletePost = async (id) => {
  let res = await fetch(`http://localhost:3000/products/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  let data = await res.json();
  console.log("dataDelete : ", data);
};
const UpdatePost = async (id) => {
  try {
    let res = await fetch(`http://localhost:3000/products/${id}`, {
      method: "PATCH", //put -completely update
      body: JSON.stringify(send_this_data),
      headers: { "Content-Type": "application/json" },
    });
    let data = await res.json();
    console.log("dataUpdate : ", data);
  } catch (e) {
    console.log(error);
  }
};

async function g4() {
  let product_div = document.getElementById("container");
  product_div.innerHTML = null;
  let res = await fetch("http://localhost:3000/products?price_gte=4000");
  let data = await res.json();

  append(data, product_div);
}
async function gl4() {
  let product_div = document.getElementById("container");
  product_div.innerHTML = null;
  let res = await fetch("http://localhost:3000/products?price_lte=4001");
  let data = await res.json();

  append(data, product_div);
}
