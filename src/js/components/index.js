// import { exampleComponent } from "./exampleComponent.js";
import { sliders } from "./sliders";

export const componentsInit = (page = document) => {
  sliders(page);
};

// needed only with Barba.js
export const componentsCleanup = (page = document) => {};
