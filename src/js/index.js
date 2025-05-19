import { globalInit, lenisMain } from "./global/globalInit.js";
import barba from "@barba/core";
import { gsap } from "gsap";
import { defaultEnter, defaultLeave } from "./global/transitions.js";
import { aboutEnter } from "./pages/about.js";
import { homeEnter, homeHeroEnter } from "./pages/home.js";
import { servicesEnter } from "./pages/services.js";
import { componentsInit } from "./components/index.js";
import { activeLink } from "./components/navbar.js";
import { galleryEnter } from "./pages/gallery.js";

globalInit();
console.log("Hello, Vite!");

barba.init({
  views: [],
  transitions: [
    {
      name: "default-transition",
      async once(data) {
        await defaultEnter(data.next.container);
      },
      async after(data) {
        componentsInit(data.next.container);
        await defaultEnter(data.next.container);
      },
      async leave() {
        await defaultLeave();
      },
    },
    {
      name: "about-transition",
      to: { namespace: ["about"] },
      async once(data) {
        aboutEnter(data.next.container);
      },
      async after(data) {
        componentsInit(data.next.container);
        aboutEnter(data.next.container);
      },
      async leave(data) {
        await defaultLeave();
      },
    },
    {
      name: "home-transition",
      to: { namespace: ["home"] },
      async once(data) {
        console.log("home transition");
        homeEnter(data.next.container);
      },
      async after(data) {
        componentsInit(data.next.container);
        homeEnter(data.next.container);
      },
      async leave(data) {
        await defaultLeave();
      },
    },
    {
      name: "home-hero-transition",
      to: { namespace: ["home-hero"] },
      async once(data) {
        homeHeroEnter(data.next.container);
      },
      async after(data) {
        componentsInit(data.next.container);
        homeHeroEnter(data.next.container);
      },
      async leave(data) {
        await defaultLeave();
      },
    },
    {
      name: "services-transition",
      to: { namespace: ["services"] },
      async once(data) {
        servicesEnter(data.next.container);
      },
      async after(data) {
        componentsInit(data.next.container);
        servicesEnter(data.next.container);
      },
      async leave(data) {
        await defaultLeave();
      },
    },
    {
      name: "gallery-transition",
      to: { namespace: ["gallery"] },
      async once(data) {
        galleryEnter(data.next.container);
      },
      async after(data) {
        componentsInit(data.next.container);
        galleryEnter(data.next.container);
      },
      async leave(data) {
        await defaultLeave();
      },
    },
  ],
});

barba.hooks.once((data) => {
  activeLink(data);
  return;
});

barba.hooks.after((data) => {
  activeLink(data);
  lenisMain.resize();
  return;
});
