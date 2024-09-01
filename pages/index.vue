<script setup lang="ts">
const title = 'Dein Florist in Imaginecity'
const description = 'Wir verkaufen Blumen, Pflanzen und Zubehör für jeden Anlass.'
const carouselRef = ref<HTMLElement | null>(null)
const carouselHover = ref<boolean>(false)

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterCard: 'summary_large_image',
})

const services = [
  {
    title: 'Hochzeitsfloristik',
    description: 'Hochzeitsfloristik für jeden Anlass, ob klassisch oder modern.',
    class: 'col-span-12 lg:col-span-3 row-span-2 lg:-translate-y-12',
  },
  {
    title: 'Trauerfloristik',
    description: 'Trauerfloristik für jeden Anlass, ob klassisch oder modern.',
    class: 'col-span-12 lg:col-span-3 row-span-2 pt-8 lg:pt-0 lg:-translate-y-6',
  },
  {
    title: 'Eventfloristik',
    description: 'Eventfloristik für jeden Anlass, ob klassisch oder modern.',
    class: 'col-span-12 lg:col-span-3 row-span-2 pt-8 lg:pt-0',
  },
  {
    title: 'Blumenabo',
    description: 'Blumenabo für jeden Anlass, ob klassisch oder modern.',
    class: 'col-span-12 lg:col-span-3 row-span-2 pt-8 lg:pt-0 lg:translate-y-6',
  },
]

const images = [
  'https://picsum.photos/600?random=1',
  'https://picsum.photos/600?random=2',
  'https://picsum.photos/600?random=3',
  'https://picsum.photos/600?random=4',
  'https://picsum.photos/600?random=5',
  'https://picsum.photos/600?random=6',
]

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value || carouselHover.value)
      return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 3500)
})
</script>

<template>
  <div class="-translate-y-[var(--header-height)] lg:translate-y-0">
    <Hero />
    <div class="relative">
      <NuxtImg src="/flowers-1.webp" alt="flowers" class="w-full max-w-[200px] lg:max-w-[500px] h-auto absolute top-10 lg:top-36 -left-8 lg:-left-14 rotate-[-22deg]" />

      <ULandingSection
        headline="Wir lieben Blumen"
        title="Floristik für jeden Anlass"
        description="Wir verkaufen Blumen, Pflanzen und Zubehör für jeden Anlass."
        :ui="{
          wrapper: 'relative',
        }"
        :links="[
          { label: 'Unsere Dienstleistungen', to: '/dienstleistungen', size: 'lg' },
        ]"
      >
        <ULandingGrid
          :ui="{
            wrapper: 'divide-y lg:divide-y-0 divide-gray-300 gap-12',
          }"
        >
          <div
            v-for="(service, index) in services" :key="`service-${index}`"
            :class="[
              service.class,
            ]"
            class="relative mx-auto group"
          >
            <div class="inline-flex items-center gap-3">
              <h3 class="text-3xl tracking-wide font-bold text-primary-500 w-full py-4 font-glory">
                {{ service.title }}
              </h3>
            </div>
            <div class="relative mb-4 after:content-[''] after:bg-primary-500/20  after:absolute after:-inset-x-3 after:inset-y-20 after:transition after:duration-400 after:z-[-1] group-hover:after:bg-primary-300/50">
              <NuxtImg :src="`https://picsum.photos/60${index}`" alt="" class="w-full h-auto aspect-square" />
            </div>
            <p class="mb-4">
              {{ service.description }}
            </p>
          </div>
        </ULandingGrid>
      </ULandingSection>
    </div>
    <LazyULandingSection
      title="Ein Ort, an dem Blumen Leidenschaft und Kunst vereinen"
      description="Seit unserer Gründung im Jahr [Gründungsjahr] ist unser Geschäft ein fester Bestandteil der [Stadtname]-Gemeinschaft. Wir verstehen uns nicht nur als Floristen, sondern als Künstler, die mit jeder Blume, jedem Blatt und jedem Arrangement eine Geschichte erzählen."
      align="right"
      :links="[
        { label: 'Unser Geschäft', to: '/unser-geschaeft', size: 'lg' },
      ]"
      :ui="{
        wrapper: 'relative overflow-x-hidden',
      }"
    >
      <NuxtImg src="/flowers-3.webp" alt="flowers" class="w-full max-w-[250px] lg:max-w-[500px] h-auto absolute top-6 z-[-1] lg:top-12 -right-8 lg:-right-14 rotate-[22deg]" />
      <div class="relative after:content-[''] after:absolute after:z-[-1] after:bg-primary-500/20 after:inset-0 after:translate-y-5 after:translate-x-5">
        <NuxtImg src="/shop.webp" alt="Unser Geschäft" class="w-full h-auto  " />
      </div>
    </LazyULandingSection>
    <LazyULandingSection
      headline="Ein Bild sagt mehr als tausend Worte"
      title="Florale Kunstwerke"
      description="Tauchen Sie ein in die Welt der Blumen und erleben Sie die Vielfalt und Kreativität unserer Arrangements. Jedes Bild erzählt eine Geschichte – von eleganten Hochzeitsbouquets über üppige Eventdekorationen bis hin zu einfühlsamen Trauerarrangements. Lassen Sie sich inspirieren und entdecken Sie, wie wir mit Blumen Momente unvergesslich machen."
      align="left"
    >
      <div class="relative after:content-[''] after:absolute after:z-[-1] after:bg-primary-500/20 after:inset-0 after:translate-y-5 after:-translate-x-5">
        <UCarousel
          ref="carouselRef"
          v-slot="{ item }"
          :items="images"
          :ui="{ item: 'basis-full' }"
          class="overflow-hidden max-h-[500px]"
          indicators
          @mouseenter="carouselHover = true"
          @mouseleave="carouselHover = false"
          @drag="carouselHover = true"
        >
          <NuxtImg :src="item" alt="Unser Geschäft" class="w-full h-auto" draggable="false" />
        </UCarousel>
      </div>
    </LazyULandingSection>
    <LazyULandingSection
      title="Lass uns gemeinsam deine Vision zum Leben erwecken"
      description="Egal ob du eine Hochzeit planst, ein Firmenevent ausrichtest oder einfach nur dein Zuhause verschönern möchtest – unser Team steht bereit, um deine Ideen mit floraler Kunst zu verwirklichen. Kontaktiere uns noch heute für eine persönliche Beratung und entdecke, wie wir deine Vorstellungen in blühende Realität verwandeln können."
      :ui="{
        wrapper: 'bg-primary-500/10',
        links: 'animate-pulse',
      }"
      :links="[
        { label: 'Kontaktiere uns', to: '/kontakt', size: 'lg' },
      ]"
    />
  </div>
</template>
