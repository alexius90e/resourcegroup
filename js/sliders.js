const bannersSwiper = new Swiper(".solutions .swiper", {
  loop: true,
  spaceBetween: 41,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    568: {
      slidesPerView: 1.25,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".solutions .swiper-button-next",
    prevEl: ".solutions .swiper-button-prev",
  },
});