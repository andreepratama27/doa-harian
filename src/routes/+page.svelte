<script lang="ts">
  import SearchBar from '../components/SearchBar/SearchBar.svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  let tempData = Object.assign({}, data);

  function onSearch(event) {
    const text = event.detail.text

    if (text === '') {
      data = tempData;
    } else {
      const filterData = data?.data.filter(x => x.doa.includes(text))
      data = {
        ...data,
        data: filterData,
      }
    }
  }
</script>

<div class="w-full min-h-screen py-8 prayer-lists bg-sand-500">
  <SearchBar on:search={onSearch} />

  <div class="my-8 bg-black h-1"></div>

  {#each data.data as item}
    <a href={`/doa/${item.id}`} class="flex items-center justify-between w-full p-4 mb-4 border-2 border-black lists hover:cursor-pointer hover:font-bold group bg-white">
      <p>{item.doa}</p>
      <div class="w-5 opacity-0 group-hover:opacity-100" role="button">
        <img src='images/right-arrow.png' alt="arrow-right" loading="lazy" class="w-full h-full" />
      </div>
    </a> 
  {/each}
  
</div>
