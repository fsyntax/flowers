<script setup lang="ts">
const title = 'flowers - Dein Florist in Imaginecity'
const description = 'Wir verkaufen Blumen, Pflanzen und Zubehör für jeden Anlass.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://ui-pro-starter.nuxt.dev/social-card.png',
  twitterImage: 'https://ui-pro-starter.nuxt.dev/social-card.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="-translate-y-[var(--header-height)] lg:translate-y-0">
    <Hero />
    <ULandingSection
      headline="Wir lieben Blumen"
      title="Floristik für jeden Anlass"
      description="Wir verkaufen Blumen, Pflanzen und Zubehör für jeden Anlass."
    >
      <ULandingGrid>
        <ULandingCard
          title="Hochzeiten"
          description="Wir haben die schönsten Blumen für deinen großen Tag."
          image="images/wedding.webp"
        />
        <ULandingCard
          title="Geburtstage"
          description="Blumensträuße und Pflanzen für jeden Geburtstag."
          image="images/birthday.webp"
        />
        <ULandingCard
          title="Trauerfloristik"
          description="Blumen für die letzte Ruhe."
          image="images/funeral.webp"
        />
      </ULandingGrid>
    </ULandingSection>
  </div>
</template>
