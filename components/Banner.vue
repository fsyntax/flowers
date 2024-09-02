<template>
  <ULandingSection
    title="Lass uns gemeinsam deine Vision zum Leben erwecken"
    description="Egal ob du eine Hochzeit planst, ein Firmenevent ausrichtest oder einfach nur dein Zuhause verschönern möchtest – unser Team steht bereit, um deine Ideen mit floraler Kunst zu verwirklichen. Kontaktiere uns noch heute für eine persönliche Beratung und entdecke, wie wir deine Vorstellungen in blühende Realität verwandeln können."
    :ui="{
      wrapper: 'bg-primary-500/10 relative overflow-hidden',
      links: 'animate-pulse',
    }"
    :links="[
      { label: 'Kontaktiere uns', to: '/kontakt', size: 'lg' },
    ]"
  >
    <NuxtImg src="/images/flowers-10.webp" alt="flowers" class="w-full h-auto max-w-[400px] lg:max-w-[450px] absolute -bottom-5 left-1/2 -translate-x-1/2" />
  </ULandingSection>
</template>
