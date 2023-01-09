<script lang="ts">
  import SearchBar from '../components/SearchBar/SearchBar.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="w-full py-8 prayer-lists">
  {#each data.data as item}
    <a href={`/doa/${item.id}`} class="flex items-center justify-between w-full p-4 mb-4 border-2 border-black lists hover:cursor-pointer hover:font-bold group bg-white">
      <p>{item.doa}</p>
      <div class="w-5 opacity-0 group-hover:opacity-100" role="button">
        <img src='images/right-arrow.png' alt="arrow-right" loading="lazy" class="w-full h-full" />
      </div>
    </a> 
  {/each}
  
</div>
