let username = document.getElementById("username")
let password = document.getElementById("password")
let signInBtn = document.getElementById("signIn")
let getUser = localStorage.getItem("username")
let getPass = localStorage.getItem("password")

signInBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  if(username.value == "" || password.value == ""){
    alert("Please Fill Your Data")
  }else{
    if((getUser && username.value === getUser)&& (getPass && password.value === getPass)){
      window.location="index.html"
    }else{
      alert("Please Write Your Correct Data")
    }
  }
})