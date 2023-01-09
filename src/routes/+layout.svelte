<script>
  import "../app.css";
  import "../font.css";
  import Navbar from '../components/Navbar/Navbar.svelte'
</script>

<div class="w-full h-full bg-sand-500">
  <Navbar />

  <div class="max-w-2xl px-4 mx-auto">
    <slot />
  </div>
</div>