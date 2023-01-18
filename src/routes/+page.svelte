<script lang="ts">
	import { createSearchStore, searchHandler } from '$lib/stores/searchStore';
	import { onDestroy } from 'svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  const searchStore = createSearchStore(data);
  const unsubscribe = searchStore.subscribe((item) => {
    searchHandler(item)
  })

  onDestroy(() => {
    unsubscribe();
  })
</script>

<div class="w-full min-h-screen py-8 prayer-lists bg-sand-500">
  <div class="w-full border-black search-wrapper relative">
    <p class="mb-4 font-semibold label">Pencarian</p>
    <div class="flex items-center">
      <input type="search" name="query" placeholder="Cari Doa" class="w-full h-12 p-4 border-2 border-black outline-none" bind:value={$searchStore.search}>
    </div>
  </div>

  <div class="my-8 bg-black h-1"></div>

  {#each $searchStore.filtered as item}
    <a href={`/doa/${item.id}`} class="flex items-center justify-between w-full p-4 mb-4 border-2 border-black lists hover:cursor-pointer hover:font-bold group bg-white">
      <p>{item.doa}</p>
      <div class="w-5 opacity-0 group-hover:opacity-100" role="button">
        <img src='images/right-arrow.png' alt="arrow-right" loading="lazy" class="w-full h-full" />
      </div>
    </a> 
  {/each}
  
</div>
