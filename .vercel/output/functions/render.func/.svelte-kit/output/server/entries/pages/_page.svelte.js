import { c as create_ssr_component, d as each, f as add_attribute, e as escape } from "../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"w-full mt-4 search-wrapper"}"><p class="${"mb-4 label"}">Pencarian</p>
  <input type="${"text"}" placeholder="${"Cari Doa"}" class="${"w-full h-12 px-4 border rounded outline"}"></div>

<div class="${"w-full py-8 prayer-lists"}">${each(data.data, (item) => {
    return `<div class="${"w-full p-4 mb-4 border rounded lists hover:cursor-pointer hover:border-blue-500"}"><a${add_attribute("href", `/doa/${item.id}`, 0)}><p>${escape(item.doa)}</p></a>
    </div>`;
  })}</div>`;
});
export {
  Page as default
};
