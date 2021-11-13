function store() {
  const name = document.querySelector("#name");
  const pass = document.querySelector("#password");
  const email = document.querySelector("#email");
  const confirmPass = document.querySelector("#confirm");
  let users = JSON.parse(localStorage.getItem("user"))
    ? JSON.parse(localStorage.getItem("user"))
    : [];

  if (name.value.length == 0) {
    alert("Please fill in email");
  } else if (pass.value.length == 0) {
    alert("Please fill in Password");
  } else if (email.value.length == 0) {
    alert("Please fill in Email");
  } else if (pass.value !== confirmPass.value) {
    alert("Please check your password");
  } else {
    users.push({
      name: name.value,
      password: pass.value,
      email: email.value,
    });

    localStorage.setItem("user", JSON.stringify(users));
  }
  window.location.href = "login.html";
}
function check() {
    const uName = document.querySelector("#userName");
    const uPass = document.querySelector("#userPassword");
   const key = localStorage.key(0);
   const u=JSON.parse( localStorage.getItem(key));
   for(let i=0;i<localStorage.length;i++){
    const storedemail=u[i].email;
    const storedPassword=u[i].password;
    if (uName.value == storedemail && uPass.value == storedPassword) {
        window.location.href = "index.html";
      } else {
        alert("Wrong Username or Password");
      }
   }
 

}
