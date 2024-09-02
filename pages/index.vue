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
    description: 'Unvergessliche Blumenarrangements für deine Traumhochzeit – von klassisch elegant bis modern und kreativ.',
    class: 'col-span-12 lg:col-span-3 row-span-2 lg:-translate-y-12',
  },
  {
    title: 'Trauerfloristik',
    description: 'Würdevolle Blumenarrangements für den Abschied – stilvoll, einfühlsam und individuell auf deine Wünsche abgestimmt.',
    class: 'col-span-12 lg:col-span-3 row-span-2 pt-8 lg:pt-0 lg:-translate-y-6',
  },
  {
    title: 'Eventfloristik',
    description: 'Blumen, die dein Event unvergesslich machen – ob Firmenfeier, Gala oder privates Fest, wir gestalten die passende Atmosphäre.',
    class: 'col-span-12 lg:col-span-3 row-span-2 pt-8 lg:pt-0',
  },
  {
    title: 'Blumenabo',
    description: 'Regelmäßig frische Blumen direkt zu dir – mit unserem Blumenabo bringst du das ganze Jahr über natürliche Schönheit in dein Zuhause oder Büro.',
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
        headline="Unsere Floristik-Dienstleistungen"
        title="Mit Leidenschaft für Blumen – Floristik für jeden Anlass"
        description="Wir bieten maßgeschneiderte Blumenarrangements, Pflanzen und Zubehör, perfekt abgestimmt auf jeden Moment in deinem Leben."
        :ui="{
          wrapper: 'relative',
          title: 'max-w-3xl',
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
      headline="Wir & unser Geschäft"
      title="Ein Ort, an dem Blumen Leidenschaft und Kunst vereinen"
      description="Seit unserer Gründung im Jahr [Gründungsjahr] ist unser Geschäft ein fester Bestandteil der [Stadtname]-Gemeinschaft. Wir verstehen uns nicht nur als Floristen, sondern als Künstler, die mit jeder Blume, jedem Blatt und jedem Arrangement eine Geschichte erzählen."
      align="right"
      :links="[
        { label: 'Unser Geschäft', to: '/unser-geschaeft', size: 'lg' },
      ]"
      :ui="{
        wrapper: 'relative overflow-hidden',
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
      description="Erlebe die faszinierende Welt der Blumen und lass dich von der Vielfalt und Kreativität unserer floralen Arrangements verzaubern. Jedes Bild in unserem Carousel erzählt eine einzigartige Geschichte – von traumhaften Hochzeitsbouquets über beeindruckende Eventdekorationen bis hin zu berührenden Trauerarrangements. Entdecke, wie wir mit floraler Kunst unvergessliche Momente schaffen."
      align="left"
      :ui="{
        wrapper: 'relative',
      }"
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
      <NuxtImg src="/images/flowers-9.webp" alt="Flowers" class="w-full max-w-[400px] lg:max-w-[500px] h-auto absolute -top-5 z-[-1] lg:top-12 -left-20 lg:-left-14 rotate-[-10deg]" />
    </LazyULandingSection>
    <Banner />
  </div>
</template>
