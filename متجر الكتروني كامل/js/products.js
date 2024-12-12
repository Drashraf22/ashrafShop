let productContainer = document.querySelector(".product-container");
let shirtContainer = document.querySelector(".shirt-container");
let headphones = document.querySelector(".headphones-container");
let TVContainer = document.querySelector(".TV-container");

fetch("products.json").
then((response)=>response.json())
.then((data)=>{
  let cart = JSON.parse(localStorage.getItem("cartProduct"))|| [];
  data.forEach(product => {
    if(product.old_Price){
      let discountPrice = Math.floor(((product.old_Price - product.price) / product.old_Price) * 100);
      const isInCart = cart.some(item => item.id === product.id);
      productContainer.innerHTML += `
          <div class="swiper-slide product-item">
            <span class="product-badge">${discountPrice}%</span>
            <div class="product-img">
              <img src="${product.image}" alt="">
            </div>
            <p class="category-name">${product.category}</p>
            <h5>${product.name}</h5>
            <div class="product-rate">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            </div>
            <div class="product-action">
              <div class="product-price">
                <span class="current_price">$${product.price}</span>
                <sub class="last_price">$${product.old_Price}</sub>
              </div>
              <div class="productBtn">
              ${isInCart ? `<span data-id="${product.id}" class="addSpan">item in cart</span>`: `<span data-id="${product.id}" class="addSpan">Add to cart</span>`}
                <i onclick='addToCart(${product.id})' class="fa-solid fa-bag-shopping ${isInCart ? "active": ""} addtocard" data-id="${product.id}"></i>
              </div>
            </div>
          </div>
      `
    }  
  });

  data.forEach(product =>{
    const isInCart = cart.some(item => item.id === product.id);
    let discountPercent = product.old_Price ? `<span class="product-badge">${Math.floor(((product.old_Price - product.price) / product.old_Price) * 100)}%</span>` : "";
    let oldP = product.old_Price ? `<sub class="last_price">$${product.old_Price}</sub>` : "";
    if(product.category == 'man shirt'){
      shirtContainer.innerHTML += `
          <div class="swiper-slide product-item">
            ${discountPercent}
            <div class="product-img">
              <img src="${product.image}" alt="">
            </div>
            <p class="category-name">${product.category}</p>
            <h5>${product.name}</h5>
            <div class="product-rate">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            </div>
            <div class="product-action">
              <div class="product-price">
                <span class="current_price">$${product.price}</span>
                ${oldP}
              </div>
              <div class="productBtn">
              ${isInCart ? `<span data-id="${product.id}" class="addSpan">item in cart</span>`: `<span data-id="${product.id}" class="addSpan">Add to cart</span>`}
                <i onclick='addToCart(${product.id})' class="fa-solid fa-bag-shopping ${isInCart ? "active": ""} addtocard" data-id="${product.id}"></i>
              </div>
            </div>
          </div>
      `
    }
  })
  
  data.forEach(product =>{
    const isInCart = cart.some(item => item.id === product.id);
    let discountPercent = product.old_Price ? `<span class="product-badge">${Math.floor(((product.old_Price - product.price) / product.old_Price) * 100)}%</span>` : "";
    let oldP = product.old_Price ? `<sub class="last_price">$${product.old_Price}</sub>` : "";
    if(product.category == 'Headphones'){
      headphones.innerHTML += `
          <div class="swiper-slide product-item">
          ${discountPercent}
            <div class="product-img">
              <img src="${product.image}" alt="">
            </div>
            <p class="category-name">${product.category}</p>
            <h5>${product.name}</h5>
            <div class="product-rate">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            </div>
            <div class="product-action">
              <div class="product-price">
                <span class="current_price">$${product.price}</span>
                ${oldP}
              </div>
              <div class="productBtn">
              ${isInCart ? `<span data-id="${product.id}" class="addSpan">item in cart</span>`: `<span data-id="${product.id}" class="addSpan">Add to cart</span>`}
                <i onclick='addToCart(${product.id})' class="fa-solid fa-bag-shopping ${isInCart ? "active": ""} addtocard" data-id="${product.id}"></i>
              </div>
            </div>
          </div>
      `
    }
  })

  data.forEach(product =>{
    const isInCart = cart.some(item => item.id === product.id);
    let discountPercent = product.old_Price ? `<span class="product-badge">${Math.floor(((product.old_Price - product.price) / product.old_Price) * 100)}%</span>` : "";
    let oldP = product.old_Price ? `<sub class="last_price">$${product.old_Price}</sub>` : "";
    if(product.category == 'TV $ screens'){
      TVContainer.innerHTML += `
          <div class="swiper-slide product-item">
          ${discountPercent}
            <div class="product-img">
              <img src="${product.image}" alt="">
            </div>
            <p class="category-name">${product.category}</p>
            <h5>${product.name}</h5>
            <div class="product-rate">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            </div>
            <div class="product-action">
              <div class="product-price">
                <span class="current_price">$${product.price}</span>
                ${oldP}
              </div>
              <div class="productBtn">
                ${isInCart ? `<span data-id="${product.id}" class="addSpan">item in cart</span>`: `<span data-id="${product.id}" class="addSpan">Add to cart</span>`}
                <i onclick='addToCart(${product.id})' class="fa-solid fa-bag-shopping ${isInCart ? "active": ""} addtocard" data-id="${product.id}"></i>
              </div>
            </div>
          </div>
      `
    }
  })
})