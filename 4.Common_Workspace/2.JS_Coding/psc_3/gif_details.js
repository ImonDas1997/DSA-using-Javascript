let id = JSON.parse(localStorage.getItem("details"));
 console.log(id);
let apikey="XWJ36C1nSJZycIQbJLFaeidn3przWC6D";

 const details = async () => {
  try{
let response =
  await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${apikey}`);
  let data = await response.json();
  //append(data);
  console.log(data.data);
  }
  catch(error){
console.log(error)
  }

      }
details();

const append=(data) => {
    let details=documment.getElementId("details");
    let img = document.createElement("img");
    img.src = data.images.original.url;

    let p = document.createElement("p");
    p.innerHTML = data.title;
    details.append(p, img);
}

