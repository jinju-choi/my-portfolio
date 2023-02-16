
new Swiper('.portfolio .mySwiper', {
  loop: true,
  navigation: {
    nextEl: '.portfolio .swiper-button-next',
    prevEl: '.portfolio .swiper-button-prev',
  },
  pagination: {
    el: '.portfolio .swiper-pagination',
  },
});

new Swiper('.portfolio-more .swiper-container', {
  breakpoints: {
    798: {
      loop: true,
      autoplay: {
        delay: 1000,
      },
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
    },
    280: {
      loop: true,
      autoplay: {
        delay: 1000,
      },
      slidesPerView: 1.5,
      spaceBetween: 20,
      centeredSlides: true,
    }
  }
});

// if(window.innerWidth < 480) {
//   new Swiper('.portfolio-more .swiper-container', {
//     loop: true,
//     autoplay: true,
//     slidesPerView: 2,
//     // centerSlides: true,
//   });
// }
