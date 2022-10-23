//what is the goal here? //plays the video.
const showClickedVideo = () => {
  let data = localStorage.getItem("clicked_video");
  let {videoId} = JSON.parse(data);

  //Embedding a video using iframe HTML element 
  let iframe = document.createElement('iframe') ;
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;

  iframe.width = "100%";
  iframe.height = "100%";
  
  iframe.setAttribute('allowfullscreen', true);
  iframe.setAttribute('autoplay', true);

  let video_div = document.getElementById("video_details");
  video_div.append(iframe);

};
