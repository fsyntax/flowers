<script setup lang="ts">
const items = [
  { name: 'Schnittblumen', description: 'Entdecke eine vielfältige Auswahl an frischen Blumen, von klassischen Rosen über exotische Orchideen bis hin zu saisonalen Wildblumen. Wir haben für jeden Anlass die passenden Blumen.', image: '/images/sortiment-schnittblumen.webp' },
  { name: 'Pflanzen', description: 'Ob für dein Zuhause oder dein Büro – wir bieten eine große Auswahl an Zimmer- und Gartenpflanzen, die nicht nur dekorativ, sondern auch pflegeleicht sind.', image: '/images/sortiment-room-plants.webp' },
  { name: 'Florale accessoires', description: 'Bei uns findest du Vasen, Pflanzgefäße, Geschenkartikel und vieles mehr, um deine Blumenkreationen perfekt in Szene zu setzen.', image: '/images/sortiment-pots.webp' },
]
useSeoMeta({
  title: 'Wir & Unser Geschäft',
  description: 'Ein Ort, an dem Blumen Leidenschaft und Kunst vereinen.',
  ogTitle: 'Wir & Unser Geschäft',
  ogDescription: 'Ein Ort, an dem Blumen Leidenschaft und Kunst vereinen.',
})
</script>

<template>
  <div>
    <UContainer class="overflow-x-hidden">
      <UPageHeader
        title="Unser Geschäft"
        description="Ein Ort, an dem Blumen Leidenschaft und Kunst vereinen"
        :ui="{
          wrapper: 'py-12',
        }"
      />
      <div class="relative after:content-[''] after:absolute after:z-[-1] after:bg-primary-500/20 after:inset-0 after:translate-y-5 after:translate-x-5">
        <NuxtImg loading="eager" preload src="/images/unser-geschaeft.webp" alt="Unsere Floristik-Dienstleistungen" class="w-full h-auto my-12 lg:mb-16" />
      </div>
      <p class="mb-8">
        Willkommen bei [Firmenname], deinem Floristikgeschäft im Herzen von [Stadtname]. Seit unserer Gründung im Jahr [Gründungsjahr] widmen wir uns mit Leidenschaft der floralen Kunst und der Aufgabe, mit Blumen Emotionen zu wecken und Räume zu verwandeln. Wir sehen uns nicht nur als Floristen, sondern als kreative Künstler, die mit jedem Blumenarrangement, jedem Blatt und jeder Komposition eine einzigartige Geschichte erzählen.
      </p>
      <div class="grid lg:grid-cols-2 gap-8 items-center">
        <div class="bg-primary-500/10 p-5">
          <h3>Öffnungszeiten:</h3>
          <ul class="list-disc marker:text-primary-500 pl-5 mb-4">
            <li>Mo. - Di. von 8:00 - 18:00 Uhr</li>
            <li>Sa. von 8:00 - 12:00 Uhr</li>
          </ul>
        </div>
        <div class="bg-primary-500/10 p-5">
          <h3>Adresse:</h3>
          <ul class="list-disc marker:text-primary-500 pl-5 mb-4">
            <li>[Straße]</li>
            <li>[PLZ] [Stadt]</li>
          </ul>
        </div>
      </div>
    </UContainer>
    <ULandingSection
      headline="Blumen mit Herz – Unsere Leidenschaft für florale Kunst"
      title="Unsere Philosophie"
      description="Blumen sind weit mehr als nur Dekoration – sie sind ein Ausdruck von Emotionen, kulturellen Traditionen und der Schönheit der Natur. Bei [Firmenname] steht die Leidenschaft für Blumen im Zentrum unseres Schaffens. Wir glauben daran, dass jedes Arrangement eine besondere Botschaft vermittelt, die perfekt auf den Anlass und die Persönlichkeit unserer Kunden abgestimmt ist."
      :ui="{
        wrapper: 'relative',
      }"
    >
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
        <div>
          <h3>Unsere Philosophie basiert auf drei Grundpfeilern:</h3>

          <ul class="list-disc pl-5 marker:text-primary-500 flex flex-col gap-3">
            <li>
              <strong class="text-primary-500">Qualität und Frische</strong>
              <p>Wir arbeiten nur mit den besten Blumen und Pflanzen, die wir sorgfältig auswählen und direkt von renommierten Gärtnereien beziehen. Unsere Blumen sind stets frisch, langlebig und von höchster Qualität, damit du lange Freude daran hast.</p>
            </li>
            <li>
              <strong class="text-primary-500">Kreativität und Handwerkskunst</strong>
              <p>
                Unsere Floristen sind nicht nur Handwerker, sondern auch Künstler. Sie bringen ihre kreative Expertise in jedes Arrangement ein, sei es für eine Hochzeit, ein Firmen-Event oder einen Trauerfall. Jedes unserer Designs wird mit Liebe zum Detail und einem Auge für das Besondere gestaltet.
              </p>
            </li>
            <li>
              <strong class="text-primary-500">Kundennähe und Service</strong>
              <p>Deine Zufriedenheit steht bei uns an erster Stelle. Wir nehmen uns Zeit, um dich individuell zu beraten und auf deine Wünsche einzugehen. Ob für einen besonderen Anlass oder einfach, um dein Zuhause zu verschönern – wir helfen dir, das perfekte Arrangement zu finden.</p>
            </li>
          </ul>
        </div>
        <div class="relative after:content-[''] after:absolute after:z-[-1] after:bg-primary-500/20 after:inset-0 after:translate-y-5 after:-translate-x-5">
          <NuxtImg src="/images/unser-geschaeft-1.webp" alt="Unser Geschäft" class="w-full h-auto" />
        </div>
      </div>
    </ULandingSection>
    <ULandingSection
      headline="Vielfalt in voller Blüte"
      title="Entdecke unser Sortiment"
      description="Unser Geschäft bietet eine breite Auswahl an floralen Produkten, die jeden Geschmack und jedes Bedürfnis abdecken. Ob frische Schnittblumen, pflegeleichte Zimmerpflanzen oder stilvolle florale Accessoires – bei uns findest du alles, was dein Herz begehrt."
    >
      <ULandingGrid class="gap-8 lg:gap-14">
        <div
          v-for="item in items"
          :key="item.name"
          class="col-span-4"
        >
          <h3 class="text-primary-500 text-3xl mb-6">
            {{ item.name }}
          </h3>
          <div class="relative after:content-[''] after:absolute after:z-[-1] after:bg-primary-500/20 after:inset-0 after:-translate-y-3 after:translate-x-3">
            <NuxtImg :src="item.image" :alt="item.name" class="w-full h-auto mb-4" />
          </div>
          <p>{{ item.description }}</p>
        </div>
      </ULandingGrid>
    </ULandingSection>
    <ULandingSection
      headline="Die kreativen Köpfe"
      title="Das Team hinter den Blumen"
      description="Unser Team besteht aus erfahrenen Floristen, die mit Leidenschaft und Kreativität jede Blume zum Strahlen bringen. Wir arbeiten Hand in Hand, um deine individuellen Wünsche zu erfüllen und dir ein einzigartiges Blumenerlebnis zu bieten."
      align="left"
    >
      <ULandingGrid class="gap-12 relative">
        <div class="col-span-4 lg:-translate-y-4 flex flex-col">
          <div class="relative after:content-[''] after:absolute after:z-[-1] after:bg-primary-500/20 after:inset-0 after:-translate-y-3 after:translate-x-3 w-full h-full">
            <NuxtImg src="/images/florist-2.webp" alt="Florist" class="h-full w-full object-cover max-h-[500px]" />
          </div>
          <div class="flex flex-col items-center mt-4 text-center">
            <strong class="font-glory text-2xl">Lukas Werger</strong>
            <span>Inhaber & Meisterflorist</span>
          </div>
        </div>
        <div class="col-span-4 flex flex-col">
          <div class="relative  after:content-[''] after:absolute after:z-[-1] after:bg-primary-500/20 after:inset-0 after:-translate-y-3 after:translate-x-3 h-full w-full">
            <NuxtImg src="/images/florist-3.webp" alt="Florist" class="h-full w-full object-cover max-h-[500px]" />
          </div>
          <div class="flex flex-col items-center mt-4 text-center">
            <strong class="font-glory text-2xl">Selina Müller</strong>
            <span>Meisterfloristin & Service</span>
          </div>
        </div>
        <div class="col-span-4 lg:translate-y-4 flex flex-col">
          <div class="relative after:content-[''] after:absolute after:z-[-1] after:bg-primary-500/20 after:inset-0 after:-translate-y-3 after:translate-x-3 w-full h-full">
            <NuxtImg src="/images/florist-1.webp" alt="Florist" class="h-full w-full object-cover max-h-[500px]" />
          </div>
          <div class="flex flex-col items-center mt-4 text-center">
            <strong class="font-glory text-2xl">Linda Tschohl</strong>
            <span>Floristin & Service</span>
          </div>
        </div>
      </ULandingGrid>
    </ULandingSection>
    <Banner />
  </div>
</template>
