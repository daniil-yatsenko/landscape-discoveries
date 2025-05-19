import { gsap } from "gsap";

const galleryEnter = (page = document) => {
  console.log("Home enter");

  const overlay = document.querySelector(".overlay");
  const h2wrappers = page.querySelectorAll(".gallery_item-name");
  const h2s = page.querySelectorAll(".h2-wrapper");
  const images = page.querySelectorAll(".splide_image-wrapper *");
  const descriptions = page.querySelectorAll(".gallery_item-description");
  const locations = page.querySelectorAll(".gallery_item-location");
  const numerings = page.querySelectorAll(".gallery_numbering-wrapper");

  let tl = gsap.timeline();

  console.log(h2s);

  tl.set(h2wrappers, { overflow: "hidden" });
  tl.set(h2s, { y: "2rem" });
  tl.set(descriptions, { y: "1rem", opacity: 0 });
  tl.set(locations, { y: "1rem", opacity: 0 });
  tl.set(numerings, { y: "1rem", opacity: 0 });
  tl.set(images, { y: "102%" });

  tl.to(overlay, {
    opacity: 0,
    display: "none",
    duration: 0.4,
    ease: "power2.inOut",
  });
  tl.to(h2s, { y: "0rem", ease: "power2.inOut", duration: 0.4 });
  tl.to(descriptions, {
    y: "0rem",
    opacity: 1,
    ease: "power2.inOut",
    delay: -0.15,
  });
  tl.to(locations, {
    y: "0rem",
    opacity: 1,
    ease: "power2.inOut",
    delay: -0.15,
  });
  tl.to(numerings, {
    y: "0rem",
    opacity: 1,
    ease: "power2.inOut",
    delay: -0.15,
  });
  tl.to(images, {
    y: "0%",
    duration: 0.8,
    ease: "power2.inOut",
    delay: -0.25,
  });
  tl.set(h2wrappers, { overflow: "" });
  tl.set(overlay, {
    opacity: "",
  });
};

export { galleryEnter };
