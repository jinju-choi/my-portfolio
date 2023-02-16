
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

if(window.innerWidth > 798) {
  new Swiper('.portfolio-more .swiper-container', {
    breakpoints: {
      798: {
        loop: true,
        autoplay: {
          delay: 1000,
        },
        slidesPerView: 4,
      },
      480: {
        loop: true,
        autoplay: true,
        slidesPerView: 2,
      }
    }
  });
}

// if(window.innerWidth < 480) {
//   new Swiper('.portfolio-more .swiper-container', {
//     loop: true,
//     autoplay: true,
//     slidesPerView: 2,
//     // centerSlides: true,
//   });
// }
