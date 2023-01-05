<section class="flex justify-center mt-8">
  {#each data.data as item}
  <div class='text-center verse'>
    <p class="pb-4 text-lg title">{item.doa}</p>
    <p class='text-4xl'>{item.ayat}</p>
    <p class='pt-2 italic'>"{item.latin}"</p>
    <div class="pt-4 text-left">
      <p>Artinya: </p>
      <p class='text-lg font-bold'>{item.artinya}</p>
    </div>
  </div>
  {/each}
</section>

<script lang='ts'>
  import type { PageData } from './$types';
  export let data: PageData;

  console.log('fff', data)
</script>