let getUser = localStorage.getItem("username");
let registerBtns = document.querySelector('.register-part')
let logOutBtns = document.querySelector('.logout-part') 
let userInfo = document.querySelector('.user') 
let logoutBtn = document.getElementById("logoutBtn")
if(getUser){
  registerBtns.style.display = "none"
  logOutBtns.style.display = "flex";
  userInfo.innerHTML = getUser
}
logoutBtn.addEventListener('click', ()=>{
  localStorage.clear();
  window.location = "register.html"
})