import { writable } from "svelte/store";

export const createSearchStore = (data: any) => {
  const { set, update, subscribe} = writable({
    data: data,
    filtered: data,
    search: ''
  })

  return {
    set,
    update,
    subscribe,
  }
};

export const searchHandler = (store: any) => {
  const searchTerm = store.search.toLowerCase() || '';
  store.filtered = store.data.data.filter((item: any) => {
    return item.doa.toLowerCase().includes(searchTerm)
  })
}