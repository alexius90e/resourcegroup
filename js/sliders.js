const solutionsSwiper = new Swiper(".solutions .swiper", {
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

const technologiesSwiper = new Swiper(".technologies .swiper", {
  spaceBetween: 20,
  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    568: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 1,
    },
    1440: {
      slidesPerView: 1.29,
      spaceBetween: 80,
      slidesOffsetBefore: 98,
      slidesOffsetAfter: 98,
    },
  },
  navigation: {
    nextEl: ".technologies .swiper-button-next",
    prevEl: ".technologies .swiper-button-prev",
  },
  pagination: {
    el: '.technologies .swiper-pagination',
  },
});