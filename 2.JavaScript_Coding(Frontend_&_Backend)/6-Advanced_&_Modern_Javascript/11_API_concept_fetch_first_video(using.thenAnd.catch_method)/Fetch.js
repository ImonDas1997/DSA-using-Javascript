fetch("https://reqres.in/api/users?page=2") //whatever data u get from this link is as a promis. you have to handle this promise. we  we use (. this) to handle promise
  .then(function (res) {
    //console.log("res:",res)
    //its also a promise as a readablestream.. if u open console and see you will see its a promise..we have toncreate promise out of it. and we will use[.json()] and again same way . then and print the data

    res.json().then(function (res) {
      console.log("res:", res.data);
    });
  })
  .catch(function (err) {
    console.log("err:", err);
  });

// To summarize, using the Fetch API will look like this :

// fetch(url)
// .then(function() {
// })
// .catch(function() {
// });

//----------------------------------------------------------------------------------

//asuncronous function we will be using because we are eating data here..so always we will use async keyward after function and we have return await before the return statement.

async function makeRequest() {
  let res = await fetch("https://reqres.in/api/users?page=2");
  let data = await res.json();
  console.log("data:", data.data);
}
makeRequest();
