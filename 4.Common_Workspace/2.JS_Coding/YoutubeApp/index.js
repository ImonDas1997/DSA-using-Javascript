//1. function defination for searchVideos ()
//2.fetch call
//async arrow function in ES6
const searchVideos = async () => {
  //.then, .catch
  //async await
  //is async await way of making api call?
  //is async await a way of handling a promise?

  const api_key =  'AIzaSyB6_6cYQcRKe4kYQ1wvgiV-ULF-wRRXGGo';

  let search_term = document.getElementById("search_term").value;
  let response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${search_term}&key=${api_key}`
  );
  
  let data =await response.json(); //here .json means not converting just collecting data //bad syntax
  console.log('data',data);
};
searchVideos();
