import { c as create_ssr_component } from "../../chunks/index.js";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"w-full h-full"}"><nav class="${"w-full p-4 h-14 bg-sky-900"}"><p class="${"font-bold text-center text-white logo"}">Doa Harian 
    </p></nav>

  <div class="${"max-w-2xl px-4 mx-auto"}">${slots.default ? slots.default({}) : ``}</div></div>`;
});
export {
  Layout as default
};
