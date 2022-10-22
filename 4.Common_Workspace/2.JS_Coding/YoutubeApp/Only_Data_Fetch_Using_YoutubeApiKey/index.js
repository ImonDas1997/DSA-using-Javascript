const searchVideos = async () => {
  const api_key = "AIzaSyDgdFZNY17Jup6fZqrVtBNDoLNXYgsR5mk";

  let response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search_term}&key=${api_key}`
  );

  let data = await response.json();
  let actual_data = data.items;
  console.log("data:", actual_data);
};

searchVideos();
console.log("This api  might not work becasue someone might have chnged the parameter  or api key got expired");