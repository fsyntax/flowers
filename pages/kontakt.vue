<script setup lang="ts">
useSeoMeta({
  title: 'Kontaktiere uns',
  description: 'Du hast Fragen zu unseren Produkten oder möchtest ein individuelles Angebot? Wir freuen uns auf Deine Nachricht und melden uns so schnell wie möglich bei Dir.',
  ogTitle: 'Kontaktiere uns',
  ogDescription: 'Du hast Fragen zu unseren Produkten oder möchtest ein individuelles Angebot? Wir freuen uns auf Deine Nachricht und melden uns so schnell wie möglich bei Dir.',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div>
    <UContainer class="overflow-x-hidden z-0">
      <UPageHeader
        title="Kontaktiere uns"
        description="Du hast Fragen zu unseren Produkten oder möchtest ein individuelles Angebot? Wir freuen uns auf Deine Nachricht und melden uns so schnell wie möglich bei Dir."
        :ui="{
          wrapper: 'py-12 relative',
        }"
      />

      <div class="grid lg:grid-cols-2 gap-12 mt-12 z-10 relative">
        <div>
          <div class="p-5 bg-primary-50 lg:p-8">
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
        <div class="z-1">
          <div class="p-5 lg:p-8 mb-4 ">
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

      <!--      <NuxtImg src="/flowers-5.webp" alt="flowers" class="max-h-[400px] lg:max-h-[500px] w-auto absolute top-[60%] lg:top-1/2 rotate-[-8deg] z-[-1] -right-12" /> -->
    </UContainer>
    <ULandingSection

      :ui="{
        wrapper: 'relative overflow-x-hidden',
        description: 'max-w-5xl',
      }"
    />
  </div>
</template>
