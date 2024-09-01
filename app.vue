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
    <NuxtPage />
  </UMain>

  <UFooter>
    <template #right>
      <UColorModeToggle />
    </template>
    <template #left>
      Copyright © {{ new Date().getFullYear() }}
    </template>
  </UFooter>
</template>

<style>
body {
  @apply font-merriweather;
}
h3 {
  @apply font-glory text-2xl font-bold tracking-wide mb-4
}
</style>
