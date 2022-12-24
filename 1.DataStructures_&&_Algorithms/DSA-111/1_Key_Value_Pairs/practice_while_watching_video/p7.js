let obj = {
  nailpolish: 10,
  mobile: 5,
  watch: 15,
  laptop: 2,
  lipstic: 25,
};

for (let key in obj) {
  if (obj[key] % 2 == 0) {
    console.log(key);
  }
}
