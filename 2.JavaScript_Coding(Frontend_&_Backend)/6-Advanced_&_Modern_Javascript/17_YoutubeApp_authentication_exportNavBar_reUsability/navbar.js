const navbar = () => {
  return `
    <div>
        <img
          style="width: 118px; padding-right: 10px; margin-top: -36px"
          src="https://www.cuomomarine.it/wp-content/uploads/iconham.png"
          alt=""
        />
      </div>
      <div>
        <img
          style="width: 120px; padding-right: 150px; margin-top: 12px"
          src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
          alt=""
        />
      </div>
      <div>
        <input
          type="text"
          style="width: 85%; height: 25px; margin-top: 10px"
          id="search_term"
        />
        <button id="search_button" style="height: 30px" onclick="searchVideos()">Search</button>
      </div>
      <div></div>
      <div></div> `;
};
export { navbar };

//here we are just reusing this navbar.js in diffrent place
//just export thisstyle here and just import itin everypage and enjoy!!!
//just returning html code
//for import just goto index.js and see.
