
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
    loop: true,
    // autoplay: true,
    slidesPerView: 4,
  });
}

if(window.innerWidth < 798) {
  new Swiper('.portfolio-more .swiper-container', {
    loop: true,
    autoplay: true,
    slidesPerView: 2,
  });
}
