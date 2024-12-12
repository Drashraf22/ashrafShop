let username = document.getElementById("username")
let mail = document.getElementById("mail")
let password = document.getElementById("password")
let signUpBtn = document.getElementById("signUp")


signUpBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  if(username.value == "" || mail.value == '' || password.value == ''){
    alert("please fill your Data")
  }else{
    localStorage.setItem("username", username.value)
    localStorage.setItem("mail", mail.value)
    localStorage.setItem("password", password.value)
    window.location ='login.html'
  }
})