<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const menuOpen = ref<boolean>(false)
const { y } = useWindowScroll()
const route = useRoute()

const links = [{

  label: 'Dienstleistungen',
  to: '/dienstleistungen',
}, {
  label: 'Geschäft',
  to: '/unser-geschaeft',
}]

const headerClass = computed(() => {
  if (route.path === '/') {
    if (y.value > 100) {
      return 'bg-light-500/80 backdrop-blur-sm border-light-800/20 dark:border-dark-600/20 transition duration-500 font-glory texture-bg'
    }
    if (y.value < 100) {
      return 'bg-transparent lg:bg-light-500/80 backdrop-blur-none lg:backdrop-blur-sm border-transparent transition duration-500 font-glory'
    }
  }
  return 'transition bg-light-500/80 backdrop-blur-sm dark:bg-dark-500/20 border-light-800/20 dark:border-dark-600/20 font-glory duration-500 texture-bg'
})
</script>

<template>
  <UHeader
    :ui="{
      wrapper: headerClass,
      logo: 'font-glory',
    }"
  >
    <template #logo>
      <div class="flex items-center gap-1">
        <NuxtImg src="/flowers_logo.webp" alt="Logo" class="w-10 h-auto" />
        <span
          class="font-normal text-3xl tracking-wide transition duration-500 text-primary-700"
          :class="[
            { 'text-light-500 lg:text-primary-500': route.path === '/' && y < 100 },
          ]"
        >flowers</span>
      </div>
    </template>

    <template #right>
      <div>
        <ul class="hidden lg:flex items-center gap-5 divide-x divide-primary-300">
          <li
            v-for="link in links"
            :key="link.to"
            class="text-xl tracking-wide hover:text-primary-500 transition hover:underline"
            :class="[
              { 'text-light-500 lg:text-dark-500': route.path === '/' && y < 100 },
            ]"
          >
            <NuxtLink
              :to="link.to"
              class="pl-5"
              @click="menuOpen = false"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/kontakt" class="text-xl tracking-wide text-primary-700 transition pl-5  hover:text-primary-500 hover:underline" @click="menuOpen = false">
              Kontakt
              <UIcon name="i-ph-chat-circle-text-fill" />
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div
        class="lg:hidden grid place-content-center w-12 h-12 relative mx-auto"
        :class="[
          { '[&>div]:h-0 [&>div]:bg-white [&>div]:before:translate-y-0 [&>div]:before:rotate-45 [&>div]:after:translate-y-0 [&>div]:after:-rotate-45': menuOpen },
        ]"
        @click="menuOpen = !menuOpen"
      >
        <div
          class="relative w-8 h-[1.5px] bg-black rounded-full transition-all duration-500 before:content-[''] before:absolute before:w-8 before:h-[1.5px] before:bg-black before:rounded-full before:-translate-y-2 before:transition-all before:duration-500 after:content-[''] after:absolute after:w-8 after:h-[1.5px] after:bg-black after:rounded-full after:translate-y-2 after:transition-all after:duration-500"
          :class="[
            { 'bg-light-500 after:bg-light-500 before:bg-light-500': route.path === '/' && y < 100 },
          ]"
        />
      </div>
      <USlideover
        v-model="menuOpen"
        side="left"
        :overlay="false"
        :ui="{
          width: 'max-w-[300px]',
          base: 'border-r border-light-600 shadow-xl relative',
          background: 'texture-bg',
        }"
      >
        <div class="px-8 pt-4 font-glory flex flex-col justify-between h-full pb-24">
          <div>
            <div class="flex items-center gap-1">
              <NuxtImg src="/flowers_logo.webp" alt="Logo" class="w-12 h-auto" />
              <span
                class="font-normal text-3xl tracking-wide transition duration-500 text-primary-700"
              >flowers</span>
            </div>
            <ul class="mt-4 flex flex-col gap-5 divide-y divide-primary-200">
              <li v-for="link in links" :key="link.to" class="text-lg pt-5 ">
                <NuxtLink :to="link.to" class="block w-full hover:text-primary-500 tracking-wide text-xl transition hover:underline" @click="menuOpen = false">
                  {{ link.label }}
                </NuxtLink>
              </li>
              <li class="pt-5">
                <NuxtLink to="/kontakt" class="text-xl tracking-wide text-primary-700 transition hover:text-primary-500 hover:underline" @click="menuOpen = false">
                  Kontakt
                  <UIcon name="i-ph-chat-circle-text-fill" />
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <p class="mb-2">
              Öffnungszeiten:
            </p>
            <ul class="list-disc marker:text-primary-500 pl-5 mb-4">
              <li>Mo. - Di. von 8:00 - 18:00 Uhr</li>
              <li>Sa. von 8:00 - 12:00 Uhr</li>
            </ul>
            <ul class="mt-4">
              <li>
                <a href="mailto:marco@freibergersyntax.dev" class="inline-flex gap-1 items-center text-primary-500 hover:underline transition">
                  <UIcon name="i-material-symbols-alternate-email-rounded" /> <span>info@flowers.com</span></a>
              </li>
              <li>
                <a href="tel:+49123456789" class="inline-flex gap-1 items-center text-primary-500 hover:underline transition">
                  <UIcon name="i-material-symbols-call" /><span>+49 123 456 789</span></a>
              </li>
            </ul>
          </div>
        </div>
        <NuxtImg src="/images/flowers-13.webp" alt="flowers" class="w-full h-auto max-w-[300px] mx-auto absolute -bottom-2" />
      </USlideover>
    </template>
  </UHeader>
</template>
