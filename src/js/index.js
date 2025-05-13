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
        await defaultEnter(data.next.container);
      },
      async leave() {
        await defaultLeave();
      },
    },
    {
      name: "about-transition",
      to: { namespace: ["about"] },
      //   async once(data) {
      //     console.log("about");
      //     aboutPrep(data.next.container);
      //     await defaultEnter();
      //     aboutInit(data.next.container);
      //   },
      //   async after(data) {
      //     console.log("about");
      //     aboutPrep(data.next.container);
      //     await defaultEnter();
      //     aboutInit(data.next.container);
      //   },
      async once(data) {
        aboutEnter(data.current.container);
      },
      async after(data) {
        aboutEnter(data.next.container);
      },
      async leave(data) {
        console.log("about");
        await defaultLeave();
      },
    },
  ],
});
