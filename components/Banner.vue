<template>
  <ULandingSection
    headline="Deine Vision in voller Blüte"
    title="Lass uns gemeinsam deine Vision zum Leben erwecken"
    description="Ob du eine unvergessliche Hochzeit planst, ein beeindruckendes Firmenevent organisierst oder dein Zuhause in eine blühende Oase verwandeln möchtest – wir sind hier, um deine Ideen mit floraler Kunst zum Strahlen zu bringen. Kontaktiere uns noch heute für eine persönliche Beratung und entdecke, wie wir deine Vorstellungen in lebendige Blütenpracht verwandeln können."
    :ui="{
      wrapper: 'bg-primary-500/10 relative overflow-hidden',
      links: 'animate-pulse',
    }"
    :links="[
      { label: 'Kontaktiere uns', to: '/kontakt', size: 'lg' },
    ]"
  >
    <NuxtImg src="/images/flowers-10.webp" alt="flowers" class="w-full h-auto max-w-[400px] lg:max-w-[450px] absolute -bottom-5 left-1/2 -translate-x-1/2" />
    <NuxtImg src="/images/blossom-1.webp" alt="Blumen Blüte" class="absolute w-20 top-8 -left-5 lg:left-12 lg:top-10 lg:w-24" />
    <NuxtImg src="/images/blossom-2.webp" alt="Blumen Blüte" class="absolute w-20 lg:w-32 top-3 -right-5" />
    <!--    <NuxtImg src="/images/blossom-3.webp" alt="Blumen Blüte" class="absolute w-20 lg:w-32 top-1/2 lg:top-2/3 -translate-y-1/2 -right-10 lg:right-20" /> -->
    <!--    <NuxtImg src="/images/blossom-4.webp" alt="Blumen Blüte" class="absolute w-20 -left-3 bottom-36" /> -->
  </ULandingSection>
</template>
