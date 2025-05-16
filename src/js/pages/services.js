import { gsap } from "gsap";

const servicesEnter = (page = document) => {
  console.log("Home enter");

  const overlay = document.querySelector(".overlay");
  const h2wrappers = page.querySelectorAll(".h2-wrapper");
  const h2s = page.querySelectorAll(".h2-wrapper *");
  const paragraphs = page.querySelectorAll(".paragraph-wrapper");
  const imageWrappers = page.querySelectorAll(".services_image-wrapper");
  const images = page.querySelectorAll(".services_image-wrapper *");

  let tl = gsap.timeline();

  tl.set(h2wrappers, { overflow: "hidden" });
  tl.set(h2s, { y: "2rem" });
  tl.set(paragraphs, { y: "1rem", opacity: 0 });
  // tl.set(imageWrappers, { overflow: "hidden" });
  tl.set(images, { y: "102%" });

  tl.to(overlay, {
    opacity: 0,
    display: "none",
    duration: 0.4,
    ease: "power2.inOut",
  });
  tl.to(h2s, { y: "0rem", ease: "power2.inOut", duration: 0.4 });
  tl.to(paragraphs, {
    y: "0rem",
    opacity: 1,
    ease: "power2.inOut",
    delay: -0.15,
    stagger: 0.05,
  });
  tl.to(images, {
    y: "0%",
    duration: 0.8,
    ease: "power2.inOut",
    stagger: 0.15,
    delay: -0.25,
  });
  tl.set(h2wrappers, { overflow: "" });
  tl.set(overlay, {
    opacity: "",
  });
};

export { servicesEnter };
