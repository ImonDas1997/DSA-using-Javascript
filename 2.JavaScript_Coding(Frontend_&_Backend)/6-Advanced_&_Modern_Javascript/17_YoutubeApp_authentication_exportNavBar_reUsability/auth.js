//what was the tool used before for auth? →> localstorage
//1. Signup-> Store data
//2. Login -> retrieve and verify data
//3. verification logic? →> YOU

// two things for comparison

//1. user input ( username & password)
//2. stored data on server (username & password)

//00PS->we will be using this design principle

class User {
  constructor() {
    //this.name
  }
  validateUsername(username) {
    // if (username.includes ('@')) {
    //return false;
    // } else {
    // return true;

    return username.includes("@") ? false : true;
  }
  validatePassword(password) {
    //if password length is less than 8, return false else true
    return password.length < 8 ? false : true;
  }

  async signUP(n, e, u, p, m, d) {
    //check if user is submitting valid username & password
    //u-> username
    //p-> password
    let isValidated = this.validateUsername(u) && this.validatePassword(p);

    if (isValidated) {
      //good to store data
      this.name = n;
      this.email = e;
      this.username = u;
      this.password = p;
      this.mobile = m;
      this.description = d;

      const register_api = `https://masai-api-mocker.herokuapp.com/auth/register`;

      const response = await fetch(register_api, {
        method: "POST",
        body: JSON.stringify(this),
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
      });
      const data = await response.json();
      console.log("data : ", data);

      //nature of fetch? -> function
      //if its a function, does it eat? → arguments
      //first argument → url
      //whats the defaULT request of fetch? →> GET
      //WE ARE THIS TIME GIVING DATA TO SERVER
    }
  }
  async Login(u, p) {
    const login_data = {
      username: u,
      password: p,
    };
    const login_api = `https://masai-api-mocker.herokuapp.com/auth/login`;
    const response = await fetch(login_api, {
      method: "POST",
      body: JSON.stringify(login_data),
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
    });
    const data = await response.json();
    return data;
  }
}

let user = new User();

const Register = () => {
  const reg_form = document.getElementById("reg_Form");
  const name = reg_form.name.value;
  const email = reg_form.email.value;
  const username = reg_form.username.value;
  const password = reg_form.password.value;
  const mobile = reg_form.mobile.value;
  const description = reg_form.description.value;

  user.signUP(name, email, username, password, mobile, description);
  console.log("user : ", user);
};

const Login = async () => {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  let { token } = await user.Login(username, password);
  getProfile(username, token);
};

const getProfile = async () => {
  let api_link = `https://masai-api-mocker.herokuapp.com/user/$(username)`;

  let response = await fetch(api_link, {
    headers: {
      Authorization: `bearer $(token)`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    mode: "no-cors",
  });
  let data = await response.json();
  console.log("data:", data);
};
