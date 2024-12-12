let cartPage = document.querySelector('.cart-page');
let cartContainer = document.querySelector('.cart-container');
let cartBtn= document.querySelector('.cart');
let xBtn= document.querySelector('.xBtn');
let cartBagde = document.querySelector(".cartBagde")
let itemsInCart = document.querySelector(".itemsInCart")
let rtPrice = document.querySelector(".rt-price")

cartBtn.addEventListener('click', ()=>{
  cartPage.classList.add("open")
})
xBtn.addEventListener('click', ()=>{
  cartPage.classList.remove("open")
})


function addToCart(id){
  fetch("products.json").
then((response)=>response.json())
.then((data)=>{
  let choosenItems = data.find(item => item.id  == id);
  
  let cart = JSON.parse(localStorage.getItem("cartProduct"))|| [];

  cart.push({...choosenItems, quantity: 1});

  localStorage.setItem("cartProduct", JSON.stringify(cart));
  updateItems()
  changeBtns(id)
})
}

function changeBtns(id) {
  const allBtns = document.querySelectorAll(`.addtocard[data-id="${id}"]`);
  const allspan = document.querySelectorAll(`.addSpan[data-id="${id}"]`);
  allBtns.forEach(btn=>{
    btn.classList.add("active");
  })
  allspan.forEach(spanText=>{
    spanText.innerHTML = "item in cart";
  })
}


function updateItems(){
  let cart = JSON.parse(localStorage.getItem("cartProduct"))|| [];
  var totalItems = 0;
  var totalPrice = 0;


  cartContainer.innerHTML = '';
  cart.forEach((item, index) => {

    totalItems +=item.quantity;
    let total_Price = item.price * item.quantity;
    totalPrice += total_Price;

    cartContainer.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" alt="">
        <div class="cart-item-info">
          <p class="cart-item-title">${item.name}</p>
          <p class="cart-item-price">$${total_Price}</p>
          <div class="cart-counter">
            <span onclick="decreaseQuantity(${index})"  class="itemnegative" data-index="${index}" > - </span>
            <span class="itemNums">${item.quantity}</span>
            <span onclick="increaseQuantity(${index})" class="itemplus" data-index="${index}"> + </span>
          </div>
        </div>
        <i onclick="removeItem(${index})" class="fa-regular fa-trash-can deleteBtn" data-index="${index}" id="deleteBtn"></i>
      </div> 
    `
  });

  cartBagde.innerHTML = totalItems;
  itemsInCart.innerHTML = totalItems;
  rtPrice.innerHTML = `$${totalPrice}`;
}


function decreaseQuantity(index){
  let cart = JSON.parse(localStorage.getItem("cartProduct"))|| [];
  if(cart[index].quantity > 1){
    cart[index].quantity -=1;
  }else{
    let deleteItem = cart.splice(index, 1)[0];
    localStorage.setItem("cartProduct", JSON.stringify(cart));
    changeCartBtn(deleteItem.id)
  }
  localStorage.setItem("cartProduct", JSON.stringify(cart));
  updateItems()
}
function increaseQuantity(index){
  let cart = JSON.parse(localStorage.getItem("cartProduct"))|| [];
  cart[index].quantity +=1;
  localStorage.setItem("cartProduct", JSON.stringify(cart));
  updateItems()
}

function removeItem(index){
  console.log(index)
  let cart = JSON.parse(localStorage.getItem("cartProduct"))|| [];
  let deleteItem = cart.splice(index, 1)[0];
  localStorage.setItem("cartProduct", JSON.stringify(cart));
  updateItems()
  changeCartBtn(deleteItem.id)
}
function changeCartBtn(item){
  const wantedItems = document.querySelectorAll(`.addtocard[data-id="${item}"]`);

  wantedItems.forEach(e=>{
    e.classList.remove('active')
  })
  const allspan = document.querySelectorAll(`.addSpan[data-id="${item}"]`);
  allspan.forEach(spanText=>{
    spanText.innerHTML = "add to cart";
  })
}
updateItems()
