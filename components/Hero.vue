<script setup lang="ts">

</script>

<template>
  <div class="relative min-h-screen lg:min-h-[70vh]">
    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[350px] lg:max-w-[600px] flex flex-col gap-4">
      <h1 class="text-6xl lg:text-7xl xl:text-[6rem] font-bold text-light-500 font-glory text-center mb-8">
        Dein Florist in Imaginecity
      </h1>
      <p class="text-lg lg:text-xl text-light-500 text-center font-bold">
        Wir verkaufen Blumen, Pflanzen und Zubehör für jeden Anlass.
      </p>
      <UButton
        label="Jetzt Kontakt aufnehmen"
        to="/kontakt"
        variant="solid"
        size="lg"
        class="animate-pulse font-glory tracking-wide font-bold text-xl mx-auto mt-8"
      />
    </div>
    <div />
    <NuxtImg loading="eager" preload src="images/hero.webp" alt="hero image" class="w-full h-full object-cover absolute inset-0 z-[-1]" />
  </div>
</template>
