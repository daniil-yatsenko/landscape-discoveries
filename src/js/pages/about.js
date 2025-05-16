import { gsap } from "gsap";

// const aboutEnter = (page) => {
//   let overlay = document.querySelector(".overlay");

//   let tl = gsap.timeline();

//   tl.to(overlay, { opacity: 0, display: "none" });
//   tl.set(overlay, {
//     opacity: "",
//   });
// };

const aboutEnter = (page = document) => {
  console.log("about enter");

  const overlay = document.querySelector(".overlay");
  const h2wrappers = page.querySelectorAll(".h2-wrapper");
  const h2s = page.querySelectorAll(".h2-wrapper *");
  const contentCells = page.querySelectorAll(
    ".grid > .grid-cell:nth-child(n+2)"
  );

  const imageWrappers = page.querySelectorAll(".about_image-wrapper");
  const images = page.querySelectorAll(".about_image-wrapper *");

  let tl = gsap.timeline();

  tl.set(h2wrappers, { overflow: "hidden" });
  tl.set(h2s, { y: "2rem" });
  tl.set(contentCells, { y: "1rem", opacity: 0 });
  tl.set(imageWrappers, { overflow: "hidden" });
  tl.set(images, { y: "102%" });

  tl.to(overlay, {
    opacity: 0,
    display: "none",
    duration: 0.4,
    ease: "power2.inOut",
  });
  tl.to(h2s, { y: "0rem", ease: "power2.inOut", duration: 0.4 });
  tl.to(contentCells, {
    y: "0rem",
    opacity: 1,
    ease: "power2.inOut",
    stagger: 0.1,
    delay: -0.05,
  });
  tl.to(images, {
    y: "0%",
    duration: 0.8,
    ease: "power2.inOut",
    stagger: 0.15,
    delay: -0.2,
  });
  tl.set(h2wrappers, { overflow: "" });
  tl.set(overlay, {
    opacity: "",
  });
};

const aboutCleanup = (page) => {};

export { aboutCleanup, aboutEnter };
