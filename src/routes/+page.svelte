<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="w-full mt-4 search-wrapper">
  <p class="mb-4 label">Pencarian</p>
  <input type="text" placeholder="Cari Doa" class="w-full h-12 px-4 border rounded outline">
</div>

<div class="w-full py-8 prayer-lists">
  {#each data.data as item}
    <div class="w-full p-4 mb-4 border rounded lists hover:cursor-pointer hover:border-blue-500">
      <a href={`/doa/${item.id}`}>
        <p>{item.doa}</p>
      </a>
    </div> 
  {/each}
  
</div>
