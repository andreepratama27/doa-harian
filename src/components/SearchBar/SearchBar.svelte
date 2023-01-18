<script lang='ts'>
	import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher()
  let searchString: string;

  function handleChange(e) {
    dispatch('search', {
      text: e.target.value,
    })
  }

  function onClear() {
    searchString = '';

    dispatch('search', {
      text: '',
    })
  }
</script>

<div class="w-full border-black search-wrapper relative">
  <p class="mb-4 font-semibold label">Pencarian</p>
  <div class="flex items-center">
    <input type="text" name="query" placeholder="Cari Doa" class="w-full h-12 p-4 border-2 border-black outline-none" on:keyup={handleChange} bind:value={searchString}>

    {#if searchString?.length > 0}
      <button class="absolute right-4 bg-black text-white px-4 py-0 flex justify-between w-24" on:click={onClear}>
        <p>Clear</p>
        &times;
      </button>
    {/if}
  </div>
</div>