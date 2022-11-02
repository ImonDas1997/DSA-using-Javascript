import { navbar } from "./navbar.js";

let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

//imgbb api key--->19876f5737d9e45a411c952d00c17713

//add event handler to create post button
let create_btn = document.getElementById("create_btn");
create_btn.onclick = () => {
  // submitting a post to server
  createPost();
};
//add event handler on select file input

let inp_image = document.getElementById("image");
inp_image.onchange = () => {
  handleImage();
};

let image_url;
const handleImage = async () => {
  //where images are stored initially? → locally
  //who can access that image? →> only YOU
  // the goal is it should be accessible to-> all
  //is internet acessible to all? yes
  //how everything is accessible on net? →> URL
  //SO WE NEED A URL FOR OUR IMAGE ;
  //imgbb will give us that.
  //provide the file, get back the url.
  //1. accept the file (image)

  let img = document.getElementById("image");
  //2. access the image data
  let actual_img = img.files[0];
  console.log("actual_img : ", actual_img); //select imgae and go to console and see getting all image data from local that we are gpingt o upoad to serve.

  //3. imgbb is asking to send data in formdata object
  let form = new FormData(); //new means construction function..inside that will crete object and return same .
  form.append("image", actual_img);

  //lets make the post request
  let res = await fetch(
    `https://api.imgbb.com/1/upload?key=19876f5737d9e45a411c952d00c17713`,
    {
      method: "POST",
      body: form,
    }
  );
  let data = await res.json();
  console.log("data : ", data);

  image_url = data.data.display_url;
};

const createPost = async () => {
  //1. grab all the data
  let id = document.getElementById("id").value;
  let caption = document.getElementById("caption").value;
  //2. pack all data to be sent in object
  let send_this_data = {
    id,
    caption,
    image_url,
  };

  //above data is accesible to whom? > local
  //is it supposed to be accesible to everyone? →> yes
  //where above data should go? -> server (local server )
  //json-server package.
  let res = await fetch("http://localhost:3000/posts", {
    method: "POST",
    body: JSON.stringify(send_this_data),
    headers: { "Content-Type": "application/json" },
  });
  let data = await res.json();
  console.log("data : ", data); //all data goint to json server... just check open http://localhost:3000/posts and check .. u will see all objects
  //fetch get request will take all data from server and just show it in frontensd. very simple..
};

//run json server using this --> json-server --watch db.json
