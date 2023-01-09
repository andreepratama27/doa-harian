import { c as create_ssr_component, d as each, e as escape } from "../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<section class="${"flex justify-center mt-8 h-screen"}">${each(data.data, (item) => {
    return `<div class="${"text-center verse"}"><p class="${"pb-4 text-lg title"}">${escape(item.doa)}</p>
    <p class="${"text-4xl"}">${escape(item.ayat)}</p>
    <p class="${"pt-2 italic"}">&quot;${escape(item.latin)}&quot;</p>
    <div class="${"pt-4 text-left"}"><p>Artinya: </p>
      <p class="${"text-lg font-bold"}">${escape(item.artinya)}</p></div>
  </div>`;
  })}
</section>`;
});
export {
  Page as default
};
