import Splide from "@splidejs/splide";
// import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { gsap } from "gsap";

import "@splidejs/splide/css/core";
import { unwrapElements } from "../utils/unwrap";

const ease = "cubic-bezier(0.45, 0, 0.55, 1)";

const splideConfig = {
  default: {
    easing: ease,
    pagination: true,
    arrows: false,
    type: "loop",
    // autoplay: true,
    classes: {
      pagination: "splide__pagination gallery_numbering-wrapper",
      page: "splide__pagination__page gallery_image-counter",
    },
  },
  services: {
    type: "loop",
    pagination: false,
    easing: ease,
    arrows: false,
    autoplay: true,
    fixedHeight: "18rem",
  },
};

const sliders = (page = document) => {
  unwrapElements();

  let sliders = page.querySelectorAll(".splide");

  if (!sliders) return;

  sliders.forEach((slider) => {
    if (!slider.querySelector(".splide__track")) return;
    if (!slider.querySelector(".splide__list")) return;
    if (slider.classList.contains("is-initialized")) return;

    let config = splideConfig.default;
    let mountConfig = {};

    // if (slider.classList.contains("is-services")) {
    //   config = splideConfig.services;
    // }

    let splide = new Splide(slider, config);
    splide.mount(mountConfig);

    // hide static placeholders (used for easier styling in Webflow)
    let numbering = page.querySelectorAll(".gallery_numbering-wrapper");
    numbering.forEach((element) => {
      if (!element.classList.contains("splide__pagination")) {
        element.style.display = "none";
      }
    });

    // workaround for safari bug ignoring aspect-ratio css
    let imageWrappers = slider.querySelectorAll(".splide_image-wrapper");
    imageWrappers.forEach((wrapper) => {
      let width = wrapper.offsetWidth;
      let height = (width * 2) / 3;

      gsap.set(wrapper, { height: height });
      window.addEventListener("resize", () => {
        width = wrapper.offsetWidth;
        height = (width * 2) / 3;
        gsap.set(wrapper, { height: height });
      });
    });

    slider.querySelectorAll(".splide__slide").forEach((slide) => {
      slide.addEventListener("click", () => {
        splide.go(">"); // Go to next slide
      });
    });
  });
};

export { sliders };
