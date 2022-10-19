//asuncronous function we will be using because we are eating data here..so always we will use async keyward after function and we have return await before the return statement.

async function makeRequest() {
  let res = await fetch("https://reqres.in/api/users?page=2");
  let data = await res.json();
  console.log("data:", data.data);
}
makeRequest();
