let apiKey = "XWJ36C1nSJZycIQbJLFaeidn3przWC6";

//arrow function
const main = async () => { 
    try { 
let response = await fetch(
  `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25&rating=g`
);

let data = await response.json();

// console.log(data.data);
append(data.data);
    }  
    catch(error) { 
console.log(error);
    }
};
main();
const append = async () => { 
    data.forEach((e) => {
        let gif = document.getElementById("gif");
        let img = document.createElement("img");
        img.src = e.images.downsized.url;
        //console.log(e.id);
        img.addEventListener("click", () => { 
            detail_gif()
        })
            gif.append(img);

    })
}

const detail_gif = (id) => {
localStorage.setItem("details", JSON.stringify(id));
window.location.href = "/gif_details.html";
};