//1. function defination for searchVideos ()
//2.fetch call
//async arrow function in ES6
const searchVideos = async () => {
  //.then, .catch
  //async await
  //is async await way of making api call?
  //is async await a way of handling a promise?

  const API_KEY = "AIzaSyBJO71Tr8zCdFTB8N6XRYEdg6FcLYWjkeI";

  let search_term = document.getElementById("search_term").value;
  let response = await fetch('https://youtube.googleapis.com/youtube/v3/comments?part=${search_term}&maxResults=25&key=${API_KEY}');
  
  let data =await response.json(); //here .json means not converting just collecting data //bad syntax
  console.log('data',data);
};
searchVideos();
