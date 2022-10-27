//1. function defination for searchVideos ()
//2.fetch call
//async arrow function in ES6
// import { navbar } from './components/navbar.js'; 
// let navbar_div = document.getElementById('navbar'); navbar_div.innerHTML=navbar();

// let search_btn=document.getElementById('search_button');
// search_btn.onclick=()=> {

// }
const searchVideos = async () => {
  //.then, .catch
  //async await
  //is async await way of making api call?
  //is async await a way of handling a promise?
 
 
 
//  let navbar_div = document.getElementById('navbar') 
//  navbar_div.innerHTML=navbar();


  try {
    const api_key = "AIzaSyDgdFZNY17Jup6fZqrVtBNDoLNXYgsR5mk";

    let search_term = document.getElementById("search_term").value;
    let response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search_term}&key=${api_key}`);
  

    let data = await response.json(); //here .json means not converting just collecting data //bad syntax
    let actual_data = data.items;
    console.log("actual_data:", actual_data);
    appendVideos(actual_data);
  } catch (err) {
    console.log("err:", err);
  }
};

const containerBase = document.getElementById("container");

const appendVideos = (data) => {
  containerBase.innerHTML = null;
  data.forEach(({ snippet, id: { videoId } }) => {
    //here you are passing videoId also
    let div = document.createElement("div");
    let p_title = document.createElement("p");
    p_title.innerText = snippet.title;
    let p_channel_name = document.createElement("p");
    p_channel_name.innerText = snippet.channelTitle;

    let thumbnail = document.createElement("img");
    thumbnail.src = snippet.thumbnails.high.url;
    div.append(thumbnail, p_title, p_channel_name);
    // youtyube api 2--->
    //make thumbnil  clickable..
    //add  eventhandlaer in the div now ......
    //add event handler to this div
    //transfer data fro, index.html to video.html
    //data= the video that user clicked (snippet, videoId)
    div.onclick = () => {
      // console.log(snippet, videoId); //video id is unique so u are pasing it
      let data = {
        snippet,
        videoId,
      };
      data = JSON.stringify(data);
      localStorage.setItem("clicked_video", data);
      window.location.href = "video.html";
    };
    containerBase.append(div);
  });
};
