<script>
  import "../app.css";
  import "../font.css";
</script>

<div class="w-full h-full">
  <nav class="w-full p-4 bg-white border-b-2 border-black h-14">
    <p class="font-bold text-center text-black logo">
      Doa Harian 
    </p>
  </nav>

  <div class="max-w-2xl px-4 mx-auto">
    <slot />
  </div>
</div>