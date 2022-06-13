import { Navigation } from "swiper";

export const projectsOptions = {
  modules: [Navigation],
  loop: true,

  navigation: {
    nextEl: ".projects__button-next",
    prevEl: ".projects__button-prev",
  },

  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    1280: {
      spaceBetween: 80,
      slidesPerView: 3,
      autoHeight: false,
    },
  },
};
