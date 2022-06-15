import Swiper from "swiper";
import { projectsOptions } from "./includes/swiperOptions";
import "./includes/lock-scroll";

if (window.screen.width >= 992) {
  let projectsSwiper = new Swiper(".swiper", projectsOptions);
}
