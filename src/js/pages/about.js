import { gsap } from "gsap";

const aboutPrep = (page) => {
  let images = page.querySelectorAll(".about_image-wrapper img");

  gsap.set(images, { y: "102%" });
};

const aboutInit = (page) => {
  let images = page.querySelectorAll(".about_image-wrapper img");
  console.log(images);

  gsap.to(images, {
    y: "0%",
    ease: "power2.inOut",
    stagger: 0.15,
    duration: 0.8,
  });
};

const aboutEnter = (page) => {
  let overlay = document.querySelector(".overlay");

  let tl = gsap.timeline();

  tl.to(overlay, { opacity: 0, display: "none" });
  tl.set(overlay, {
    opacity: "",
  });
};

const aboutCleanup = (page) => {};

export { aboutCleanup, aboutInit, aboutPrep, aboutEnter };
