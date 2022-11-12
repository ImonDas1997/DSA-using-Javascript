let carouselDiv = document.getElementById("carousel");

function carousel() {

let images = [
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80",
  "https://i.ytimg.com/vi/UlKkQ9qnmzY/maxresdefault.jpg",
  "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/ko3z6xkjaqniq6nejb9d",
  "https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg",
  "https://media.istockphoto.com/id/1187830875/photo/confectioner-decorating-chocolate-cake-close-up.jpg?s=612x612&w=0&k=20&c=sAUop7R4pohc-Pghb3CqVJnFE44p2phGi47z7pjK4Lc=",
  "https://toujours.co.in/wp-content/uploads/2020/12/Baloon-Cake.png",
]; 

let imgs = document.createElement("img");
imgs.src = images[0];
imgs.style.height="120vh";
imgs.style.width="100%";

carouselDiv.append(imgs); 

let i =1;
 setInterval(function () {
   if (i === images.length) {
     i = 0;
   }

   imgs.src = images[i];
   carouselDiv.append(imgs);
   i++;
 }, 3000);

}
carousel();