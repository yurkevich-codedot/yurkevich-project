import Swiper, { Navigation } from "swiper";

const swiper = new Swiper(".swiper", {
  modules: [Navigation],
  loop: true,

  navigation: {
    nextEl: ".projects__button-next",
    prevEl: ".projects__button-prev",
  },

  breakpoints: {
    0: {
      direction: "vertical",
      spaceBetween: 40,
      slidesPerView: 3,
      mousewheel: true,
    },
    992: {
      direction: "horizontal",
      slidesPerView: 2,
      spaceBetween: 60,
    },
    1280: {
      spaceBetween: 80,
      slidesPerView: 3,
      autoHeight: false,
    },
  },
});
