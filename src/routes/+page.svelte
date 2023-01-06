<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="w-full pb-8 mt-4 border-b-4 border-black search-wrapper">
  <p class="mb-4 font-semibold label">Pencarian</p>
  <input type="text" name="query" placeholder="Cari Doa" class="w-full h-12 p-4 border-2 border-black outline-none">
</div>

<div class="w-full py-8 prayer-lists">
  {#each data.data as item}
    <a href={`/doa/${item.id}`} class="flex items-center justify-between w-full p-4 mb-4 border-2 border-black lists hover:cursor-pointer hover:font-bold group">
      <p>{item.doa}</p>
      <div class="w-5 opacity-0 group-hover:opacity-100" role="button">
        <img src='images/right-arrow.png' alt="arrow-right" loading="lazy" class="w-full h-full" />
      </div>
    </a> 
  {/each}
  
</div>
