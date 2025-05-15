import { initPageRouter } from "./utils/pageCodeRouter.js";
import { globalInit } from "./global/globalInit.js";
import barba from "@barba/core";
import { gsap } from "gsap";
import { defaultEnter, defaultLeave } from "./global/transitions.js";
import {
  aboutCleanup,
  aboutInit,
  aboutPrep,
  aboutEnter,
} from "./pages/about.js";
import { componentsInit } from "./components/index.js";

globalInit();
console.log("Hello, Vite!");

barba.init({
  views: [],
  transitions: [
    {
      name: "default-transition",
      async once(data) {
        componentsInit(data.next.container);
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
        componentsInit(data.next.container);
        aboutEnter(data.current.container);
      },
      async after(data) {
        componentsInit(data.next.container);
        aboutEnter(data.next.container);
      },
      async leave(data) {
        console.log("about");
        await defaultLeave();
      },
    },
  ],
});
