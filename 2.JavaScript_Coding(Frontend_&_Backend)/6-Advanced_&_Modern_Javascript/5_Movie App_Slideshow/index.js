function carousel() {
  let images = [
    
  ];

  //all of this images should be visible one by one?
  //how can i access first image? -> images [0]
  //how can i access third image? -> images [2]
  //how long until i append second image? →>3 seconds

  let imgElement = document.createElement("img");

  //as soon as website open show -> images [0]
  //interval of 3 seconds
  //next image? -> images [1]

  let i = 0;
  setInterval(function () {
    console.log(i);
    i++;
    //show me 1 after 3 seconds
    //show me 2 after 3 seconds
  },3000);
}

carousel();
