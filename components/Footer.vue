<script setup lang="ts">
const links = [
  {
    label: 'Impressum',
    to: '/',
  },
  {
    label: 'Datenschutz',
    to: '/',
  },
]
</script>

<template>
  <UFooter
    :links="links"
    :ui="{
      bottom: {
        center: 'font-glory text-xl tracking-wide',
      },
    }"
  >
    <template #left>
      <div class="flex flex-col lg:flex-row lg:items-center gap-3 lg:divide-x lg:divide-dark-500">
        <div>
          <span class="font-glory text-2xl">flowers</span> © {{ new Date().getFullYear() }}
        </div>
        <div class="text-xs lg:pl-4 lg:pt-1">
          Made with 💚 by <a class="text-primary-500 underline" href="https://freibergersyntax.dev" target="_blank">Marco</a>
        </div>
      </div>
    </template>

    <template #right>
      <UButton icon="i-simple-icons-facebook" color="gray" variant="ghost" to="https://facebook.com" target="_blank" />
      <UButton icon="i-simple-icons-instagram" color="gray" variant="ghost" to="https://instagram.com" target="_blank" />
    </template>
  </UFooter>
</template>
