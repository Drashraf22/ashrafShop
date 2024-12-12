var swiper = new Swiper(".main-swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  loop:true,
  autoplay:{
    delay:2000,
  }
});

var swiper = new Swiper(".product-swiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  breakpoints:{
    1200:{
      slidesPerView:4,
    spaceBetween:20,
    },
    1000:{
      slidesPerView:3,
      spaceBetween:20,
    },
    500:{
      slidesPerView:1,
      spaceBetween:20,
    }
  },
  loop:true,
  autoplay:{
    delay:2000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".headphones", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  breakpoints:{
    1200:{
      slidesPerView:4,
    spaceBetween:20,
    },
    1000:{
      slidesPerView:3,
      spaceBetween:20,
    },
    500:{
      slidesPerView:1,
      spaceBetween:20,
    }
  },
  loop:true,
  autoplay:{
    delay:2000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});