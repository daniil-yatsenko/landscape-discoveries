import { gsap } from "gsap";
import { lenisMain } from "./globalInit";

let overlay = document.querySelector(".overlay");

gsap.defaults({
  ease: "power2.inOut",
  duration: 0.3,
});

const defaultEnter = async (page) => {
  const tl = gsap.timeline();

  let sections;

  if (page) {
    sections = page.children;
  } else {
    sections = document.querySelector(".main-wrapper").children;
  }

  tl.set(sections, { opacity: 0, y: "1rem" });
  tl.to(overlay, { opacity: 0, display: "none" });
  tl.to(sections, {
    opacity: 1,
    y: "0rem",
    duration: 0.4,
    ease: "power2.out",
    stagger: 0.2,
    delay: -0.1,
  });
  tl.set(overlay, {
    opacity: "",
  });

  return tl.then(() => {
    lenisMain.resize();
  });
};

const defaultLeave = async () => {
  let tl = gsap.timeline();

  tl.set(overlay, { opacity: 0, display: "block" });
  tl.to(overlay, {
    opacity: 1,
  });

  return tl.then(() => {
    lenisMain.resize();
  });
};

export { defaultEnter, defaultLeave };
