import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import "@splidejs/splide/css/core";
import { unwrapElements } from "../utils/unwrap";

const ease = "cubic-bezier(0.45, 0, 0.55, 1)";

const splideConfig = {
  default: {
    pagination: false,
    easing: ease,
    pagination: true,
    arrows: false,
    autoScroll: {
      speed: 5,
    },
    classes: {
      pagination: "splide__pagination gallery_numbering-wrapper",
      page: "splide__pagination__page gallery_image-counter",
    },
  },
};

const sliders = () => {
  unwrapElements();

  let sliders = document.querySelectorAll(".splide");

  if (!sliders) return;

  sliders.forEach((slider) => {
    if (!slider.querySelector(".splide__track")) return;
    if (!slider.querySelector(".splide__list")) return;

    let config = splideConfig.default;
    let mountConfig = { AutoScroll };

    let splide = new Splide(slider, config);
    splide.mount(mountConfig);
  });
};

export { sliders };
