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

// random 
//api- format for the url;

const random = async  () => { 
    let gif = document.getElementById("gif"); 
    gif.innerHTML = null; 
    try { 
        let response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=$(apikey)&tag=&rating=g`);
         let result = await response.json (); 
         console.log(result); 
         let img = document.createElement("img"); 
         img.src = result.data.images.downsized.url;
         img.addEventListener("click", ()=>{
            detail_gif(data.data.id);
         });

         gif.append(img);
        
    }  catch (error) {
   console.log(error);
    }
}

//categories 
//api- document.
//api.giphy.com/v1/gifs/categories

const categories = async  () => { 
    let gif = document.getElementById("gif"); 
    gif.innerHTML = null;

    let soritng = document.getElementById("sorting");
     sorting.innerHTML = null;


    try{
 let response = await fetch(
   `https://api.giphy.com/v1/gifs/categories?api_key=$(apikey)&tag=&rating=g`
 );
         let result = await response.json(); 

         let sorting_Z_A = document.createElement("button");
         sorting_Z_A.innerText = "Z-A";
         sorting.append(sorting_Z_A);

         let sorting_A_Z = document.createElement("button");
         sorting_A_Z.innerText = "A-Z";
         sorting.append(sorting_A_Z);

         let dum;
         sorting_A_Z.onclick = () => {
           sorting_cat((dum = false));
         };
         sorting_Z_A.onclick = () => {
           sorting_cat((dum = true));
         };

         console.log(result);

result.data.forEach((e) => {
 let name = document.createElement("p"); 
 name.innerHTML = e.name;
 // console.log(name) 
let image = document.createElement("img");
 image.src = e.gif.images.downsized.url; 
 image.addEventListener("click", () => { detail_gif(e.gif.id); 
}); 
gif.append(name, image);
});

    } 
    catch(error){
console.log(error);
    }
}
const sorting_cat = (dum) => {
  let data = JSON.parse(localStorage.getItem("categories"));

  // it will only run when dum is true ;
  if (dum == true) {
    data = data.reverse();
  }

  // the below code will run every time we click on sorting_cat.
  let gif = document.getElementById("gif");
  gif.innerHTML = null;

  data.forEach((e) => {
    let name = document.createElement("p");
    name.innerHTML = e.name;
    // console.log(name)
    let image = document.createElement("img");
    image.src = e.gif.images.downsized.url;
    image.addEventListener("click", () => {
      detail_gif(e.gif.id);
    });
    gif.append(name, image);
  });
}

const search = async () => {
     try { 
        let gif = document.getElementById("gif"); 
        gif.innerHTML = null;
        let query = document.getElementById("search").value; 
        if (query == "") { 
            alert("please provide your input"); 
        }
            let res = await fetch(
              `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=25&offset=0&rating=g&lang=en`
            );

            let data = await res.json(); console.log(data.data); 
            data.data.forEach((e) => {
                 let name = document.createElement("p");
                  name.innerHTML = e.title;
                   // console.log(name)
                   let image = document.createElement("img"); 
                   image.src = e.images.downsized.url;
              image.addEventListener("click", () =>{ 
                detail_gif(e.id);
                 }); 
                 gif.append(name, image); 
                });  
            } catch (e) { 
                console.log(e); 
            }  
        
    };

    const translates = async () => {
      try {
        let gif = document.getElementById("gif");
        gif.innerHTML = null;
        let query = document.getElementById("search").value;
        if (query == "") {
          alert("please provide your input");
        }
        let res = await fetch(
          `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&q=${query}&limit=25&offset=0&rating=g&lang=en`
        );

        let data = await res.json();
        console.log(data);
       
          let name = document.createElement("p");
          name.innerHTML = data.data.title;
          // console.log(name)
          let image = document.createElement("img");
          image.src = data.data.images.downsized.url;
          image.addEventListener("click", () => {
            detail_gif(data.data.id);
          });
          gif.append(name, image);
       
      } catch (e) {
        console.log(e);
      }
    };