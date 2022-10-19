//1. function defination for searchVideos ()
const searchVideos = () => {
     //.then, .catch 
     //async await 
     //is async await way of making api call? 
     //is async await a way of handling a promise? 

let API_KEY = "AIzaSyB6_6cYQcRKe4kYQ1wvgiV-ULF-wRRXGGo";

let response = await fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=rrr&key=[AIzaSyB6_6cYQcRKe4kYQ1wvgiV-ULF-wRRXGGo]'); 

    };