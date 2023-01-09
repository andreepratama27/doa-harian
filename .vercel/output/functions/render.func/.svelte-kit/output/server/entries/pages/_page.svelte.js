import { c as create_ssr_component, d as each, f as add_attribute, e as escape } from "../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"w-full py-8 prayer-lists"}">${each(data.data, (item) => {
    return `<a${add_attribute("href", `/doa/${item.id}`, 0)} class="${"flex items-center justify-between w-full p-4 mb-4 border-2 border-black lists hover:cursor-pointer hover:font-bold group bg-white"}"><p>${escape(item.doa)}</p>
      <div class="${"w-5 opacity-0 group-hover:opacity-100"}" role="${"button"}"><img src="${"images/right-arrow.png"}" alt="${"arrow-right"}" loading="${"lazy"}" class="${"w-full h-full"}"></div>
    </a>`;
  })}</div>`;
});
export {
  Page as default
};
