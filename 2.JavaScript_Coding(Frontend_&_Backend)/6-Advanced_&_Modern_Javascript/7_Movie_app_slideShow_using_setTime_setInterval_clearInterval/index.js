
let carousel_div = document.getElementById('carousel'); 

function carousel() {
 
 
    //all of this images should be visible one by one? 
  //how can i access first image? -> images [0]
   //how can i access third image? images [2] 
  //how long until i append second image? →> 3 seconds
  let images = [
    "https://images.unsplash.com/photo-1664138218128-2dcf791a9d27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1645788898721-ab7caf5e112a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1659388825256-d33a36d4c281?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  ]; 
  
  let imgElement = document.createElement('img'); 
  imgElement.src = images [0]; 
  carousel_div.append( imgElement); 

   
   //as soon as website open show →> images [0] 
   //interval of 3 seconds 
   //next image? -> images [1] l
   
   let i =1;


   setInterval(function () { 
    
    //show me 1 after 3 seconds 
    //show me 2 after 3 seconds 
    if (i === images.length) {
      i = 0;
    }
    
    
  //append images 
  
  imgElement.src = images [i]; 
  carousel_div.append(imgElement);
   i++;
 }, 3000);
  
}
   carousel();