//what was the tool used before for auth? →> localstorage
//1. Signup-> Store data
//2. Login -> retrieve and verify data
//3. verification logic? →> YOU

// two things for comparison

//1. user input ( username & password)
//2. stored data on server (username & password)

//00PS->we will be using this design principle

class User {
  constructor() {}
  //this.name
  validateUsername(username) {
    return username.includes("@") ? false : true;
  }

  validatePassword(password) {
    return password.length < 8 ? false : true;
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
    });
    const data = await response.json();
    console.log("data : ", data);
    return data;
  }

  async signUP(n, e, u, p, m, d) {
    //check if user is submitting valid username & password
    //u-> username
    //p-> password
    let isValidated = this.validateUsername(u) && this.validatePassword(p);

    if (isValidated) {
      this.name = n;
      this.email = e;
      this.username = u;
      this.password = p;
      this.mobile = m;
      this.description = d;

      const x = `https://masai-api-mocker.herokuapp.com/auth/register`;

      const response = await fetch(x, {
        method: "POST",
        body: JSON.stringify(this),
        headers: {
          "Content-Type": "application/json",
        },
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
  //input->
  // pablo234,
  // pablo234@gmail.com
  // pablo234
  // pablo234
  // 6566567787
  // xyz

  // o/p-->registration success on console
};

const Login = async () => {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;
  let data = await user.Login(username, password);
  // input->pablo234,pablo234
  //p/p-->{token: '7e70523be684d753ab4963adc07ecaa4', error: false}

  getProfile(username, data.token);
  //alternative way of writing (getting token data from server data object)
  // let { token } = await user.Login(username, password); //directly takling value of token form server data object

  // getProfile(username, token);
};

const getProfile = async (username, token) => {
  let api_link = `https://masai-api-mocker.herokuapp.com/user/${username}`;
  let response = await fetch(api_link, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  let data = await response.json();
  console.log("data : ", data);

  //o/p-->
  // description: "xyz";
  // email: "pablo234@gmail.com";
  // mobile: "6766543343";
  // name: "pablo234";
  // token: "7e70523be684d753ab4963adc07ecaa4";
  // username: "pablo234";
  //now u can show all the dta to frontend
};

//masai repo link--->https://github.com/masai-school/api-mocker/wiki/Authentication-API
