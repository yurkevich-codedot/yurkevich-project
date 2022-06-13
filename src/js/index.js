import Swiper from "swiper";
import { projectsOptions } from "./includes/swiperOptions";

if (window.screen.width >= 992) {
  let projectsSwiper = new Swiper(".swiper", projectsOptions);
  swiper = projectsSwiper;
} else {
  swiper = projectsSwiper;
}
