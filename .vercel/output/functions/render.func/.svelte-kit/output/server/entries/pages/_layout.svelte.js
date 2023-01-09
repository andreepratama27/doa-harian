import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const app = "";
const font = "";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"w-full p-4 bg-white border-b-2 border-black h-14"}"><p class="${"font-bold text-center text-black logo"}">Do&#39;a Harian
  </p></nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"w-full h-full bg-sand-500"}">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

  <div class="${"max-w-2xl px-4 mx-auto"}">${slots.default ? slots.default({}) : ``}</div></div>`;
});
export {
  Layout as default
};
