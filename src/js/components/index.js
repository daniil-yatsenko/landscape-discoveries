// import { exampleComponent } from "./exampleComponent.js";
import { sliders } from "./sliders";

export const componentsInit = (page = document) => {
  sliders();
  console.log("components init");
};

// needed only with Barba.js
export const componentsCleanup = (page = document) => {
  console.log("components cleanup");
};
