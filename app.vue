<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
  ],
  htmlAttrs: {
    lang: 'de',
  },
})
</script>

<template>
  <Header />
  <UMain>
    <NuxtPage
      :transition="{
        name: 'page',
        mode: 'out-in',
      }"
    />
  </UMain>

  <Footer />
</template>

<style>
body {
  @apply font-merriweather text-dark-500 dark:text-light-500 texture-bg;
}

.texture-bg {
  background-image: url("https://www.transparenttextures.com/patterns/groovepaper.png");
}
h3 {
  @apply font-glory text-2xl font-bold tracking-wide mb-4
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
