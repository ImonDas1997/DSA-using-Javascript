class User {
  constructor() {}

  validateUsername(username) {
    return username.includes("@") ? false : true;
  }

  validatePassword(password) {
    return password.length < 8 ? false : true;
  }

  async signUP(n, e, u, p, m, d) {
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
          accept: "application/json",
        },
      });
      const data = await response.json();
      console.log("data : ", data);
    }
  }
}
let y = new User();

const Register = () => {
  const reg_form = document.getElementById("reg_Form");
  const name = reg_form.name.value;
  const email = reg_form.email.value;
  const username = reg_form.username.value;
  const password = reg_form.password.value;
  const mobile = reg_form.mobile.value;
  const description = reg_form.description.value;

  y.signUP(name, email, username, password, mobile, description);
  console.log("user : ", y);
  a;
};
