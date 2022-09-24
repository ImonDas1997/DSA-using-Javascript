function toFarenheight(c)
  {
    let f=(c*9/5)+32;
    //console.log(f);
    return f;
  }
for(let temp of tempInCelcious)//--using for of loop ->only array and astring directly traverse
  {
    toFarenheight(temp);
    //using array we can get all value
  }
console.log(toFarenheight(temp));