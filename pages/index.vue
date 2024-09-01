<script setup lang="ts">
const title = 'flowers - Dein Florist in Imaginecity'
const description = 'Wir verkaufen Blumen, Pflanzen und Zubehör für jeden Anlass.'
const carouselRef = ref<HTMLElement | null>(null)
const carouselHover = ref<boolean>(false)

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://ui-pro-starter.nuxt.dev/social-card.png',
  twitterImage: 'https://ui-pro-starter.nuxt.dev/social-card.png',
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
      headline="Wir sind für Dich da"
      title="Kontaktiere uns"
      description="Du hast Fragen zu unseren Produkten oder möchtest ein individuelles Angebot? Wir freuen uns auf Deine Nachricht und melden uns so schnell wie möglich bei Dir."
      :ui="{
        wrapper: 'relative overflow-x-hidden',
      }"
    >
      <NuxtImg src="/flowers-4.webp" alt="flowers" class="w-full max-w-[150px] lg:max-w-[250px] h-auto absolute -top-24 z-[-1] left-0 rotate-[60deg]" />
      <NuxtImg src="/flowers-5.webp" alt="flowers" class="max-h-[400px] lg:max-h-[500px] w-auto absolute top-[63%] lg:top-1/2 rotate-[-8deg] z-[-2] -right-12" />
      <div class="grid lg:grid-cols-2 gap-12">
        <div>
          <div class="p-5 bg-primary-500/10 lg:p-8">
            <h3>Besuche uns im Geschäft</h3>
            <p class="mb-4">
              Wir freuen uns auf Deinen Besuch in unserem Geschäft in der [Straße, PLZ, Stadt]. Lass Dich von unserer Auswahl inspirieren und finde das perfekte Blumenarrangement für jeden Anlass.
            </p>
            <p class="mb-4">
              Unser Geschäft in [Ort] hat folgende Öffnungszeiten:
            </p>
            <ul class="list-disc marker:text-primary-500 pl-5 mb-4">
              <li>Mo. - Di. von 8:00 - 18:00 Uhr</li>
              <li>Sa. von 8:00 - 12:00 Uhr</li>
            </ul>
            <UButton
              label="In Google Maps öffnen"
              to="https://www.google.com/maps/place/Mount+Everest/@27.9881526,86.8860064,14z/data=!3m1!4b1!4m6!3m5!1s0x39e854a215bd9ebd:0x576dcf806abbab2!8m2!3d27.9881206!4d86.9249751!16zL20vMGJsYmQ?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
              :external="true"
              variant="link"
              size="lg"
              target="_blank"
            />
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
          <NuxtImg src="/shop.webp" alt="Unser Geschäft" class="w-full aspect-[16/9] object-cover" />
        </div>
        <div class="z-1 ">
          <div class="p-8 mb-4 ">
            <h3 class="mb-4">
              Schreibe uns eine Nachricht
            </h3>
            <p class="mb-4">
              Wir freuen uns auf Deine Nachricht und melden uns so schnell wie möglich bei Dir.
            </p>
          </div>
          <div class="p-8 ring-1 ring-primary-500/20 bg-background">
            <ContactForm />
          </div>
        </div>
      </div>
    </LazyULandingSection>
  </div>
</template>
