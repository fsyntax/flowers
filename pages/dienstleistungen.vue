<script setup lang="ts">
useSeoMeta({
  title: 'Unsere Floristik-Dienstleistungen',
  description: 'Blumen für jeden Anlass – maßgeschneiderte Floristik nach deinen Wünschen',
})
</script>

<template>
  <div>
    <UContainer>
      <UPageHeader
        title="Unsere Floristik-Dienstleistungen"
        description="Blumen für jeden Anlass – maßgeschneiderte Floristik nach deinen Wünschen"
        :ui="{
          wrapper: 'py-12',
        }"
      />
      <div class="relative after:content-[''] after:absolute after:z-[-1] after:bg-primary-500/20 after:inset-0 after:translate-y-5 after:translate-x-5">
        <NuxtImg loading="eager" preload src="/images/services-header.webp" alt="Unsere Floristik-Dienstleistungen" class="w-full h-auto my-12 lg:mb-16" />
      </div>
      <p>Bei [Firmenname] bieten wir eine breite Palette von Floristik-Dienstleistungen, die auf deine individuellen Bedürfnisse zugeschnitten sind. Ob es um die Gestaltung eines besonderen Ereignisses, die tägliche Verschönerung deines Zuhauses oder die respektvolle Begleitung eines Trauerfalls geht – wir sind dein verlässlicher Partner für alles, was mit Blumen zu tun hat.</p>
    </UContainer>
    <ULandingSection
      headline="Für den schönsten Tag deines Lebens"
      title="Hochzeitsfloristik"
      description="Die Hochzeit ist ein einzigartiges Ereignis, und die Blumen spielen dabei eine zentrale Rolle. Bei uns bekommst du maßgeschneiderte Blumenkreationen, die perfekt zu deinem Stil und deinen Wünschen passen. Unser erfahrenes Team begleitet dich von der ersten Beratung bis zum letzten Feinschliff, um sicherzustellen, dass deine Hochzeit in voller Blütenpracht erstrahlt."
      align="left"
      :ui="{
        wrapper: 'relative',
      }"
      :features="[
        { name: 'Brautsträuße', description: 'Klassisch, modern, boho oder vintage – wir kreieren den perfekten Brautstrauß, der zu dir passt.', icon: 'i-mdi-flower-poppy' },
        { name: 'Tischdekoration', description: 'Vom festlichen Bankett bis zum rustikalen Picknick – wir gestalten die passende Tischdekoration für deine Hochzeit.', icon: 'i-mdi-flower-poppy' },
        { name: 'Kirchenschmuck', description: 'Blumenschmuck für den Altar, die Bänke und den Eingangsbereich – wir sorgen für eine festliche Atmosphäre in der Kirche.', icon: 'i-mdi-flower-poppy' },
      ]"
    >
      <div class="relative after:content-[''] after:absolute after:z-[-1] after:bg-primary-500/20 after:inset-0 after:translate-y-5 after:-translate-x-5">
        <NuxtImg src="/images/service-wedding.webp" alt="Hochzeitsfloristik" class="w-full h-auto " />
      </div>
    </ULandingSection>

    <ULandingSection
      headline="Blumige Akzente für jedes Event"
      title="Eventfloristik"
      description="Egal, ob du eine Firmenfeier, eine Geburtstagsfeier oder ein Jubiläum planst – wir bieten dir kreative und stilvolle Blumendekorationen, die deine Veranstaltung unvergesslich machen. Unsere Arrangements werden speziell auf das Thema und die Stimmung deines Events abgestimmt."
      align="right"
      :features="[
        { name: 'Firmen- und Geschäftsevents', description: 'Beeindrucke Kunden und Mitarbeiter mit floralen Kunstwerken, die dein Event aufwerten.', icon: 'i-mdi-flower-poppy' },
        { name: 'Privatfeiern', description: 'Schaffe mit unseren Blumenarrangements eine Atmosphäre, die deine Gäste begeistert.', icon: 'i-mdi-flower-poppy' },
        { name: 'Themenpartys', description: 'Wir gestalten Blumendekorationen, die perfekt zu deinem Motto passen – von elegant bis extravagant.', icon: 'i-mdi-flower-poppy' },
      ]"
    >
      <div class="relative after:content-[''] after:absolute after:z-[-1] after:bg-primary-500/20 after:inset-0 after:translate-y-5 after:translate-x-5">
        <NuxtImg src="/images/service-event.webp" alt="Eventfloristik" class="w-full h-auto" />
      </div>
    </ULandingSection>

    <ULandingSection
      headline="Mit Blumen Anteilnahme zeigen"
      title="Trauerfloristik"
      description="In Zeiten des Abschieds sind Blumen ein stilles, aber starkes Zeichen des Gedenkens und des Trostes. Wir bieten einfühlsame und würdevolle Floristik, die deine Gefühle ausdrückt und den Verstorbenen auf angemessene Weise ehrt."
      align="left"
      :features="[
        { name: 'Trauerkränze und Gestecke', description: 'Traditionell oder modern, unsere Arrangements spenden Trost und drücken deine Anteilnahme aus.', icon: 'i-mdi-flower-poppy' },
        { name: 'Sargdekorationen', description: 'Schöne und würdevolle Blumenarrangements, die einen letzten Gruß an den Verstorbenen senden.', icon: 'i-mdi-flower-poppy' },
        { name: 'Blumenschmuck für die Trauerfeier', description: 'Dezente und respektvolle Dekorationen für den Raum der Trauerfeier oder die Grabstätte.', icon: 'i-mdi-flower-poppy' },
      ]"
    >
      <div class="relative after:content-[''] after:absolute after:z-[-1] after:bg-primary-500/20 after:inset-0 after:translate-y-5 after:-translate-x-5">
        <NuxtImg src="/images/service-funeral.webp" alt="Trauerfloristik" class="w-full h-auto" />
      </div>
    </ULandingSection>

    <ULandingSection
      headline="Blumen, die mit den Jahreszeiten gehen"
      title="Saisonale Floristik"
      description="Jede Jahreszeit bringt ihre eigenen Farben und Blüten hervor. Wir bieten dir Blumenarrangements, die die Schönheit der jeweiligen Saison einfangen und deine Räume in eine frische, saisonale Atmosphäre tauchen."
      align="right"
      :features="[
        { name: 'Frühling', description: 'Zarte Blüten wie Tulpen, Narzissen und Hyazinthen, die das Erwachen der Natur feiern.', icon: 'i-mdi-flower-poppy' },
        { name: 'Sommer', description: 'Bunte Blumenvielfalt mit Sonnenblumen, Lavendel und Gerbera für sonnige Tage.', icon: 'i-mdi-flower-poppy' },
        { name: 'Herbst', description: 'Warme Erdtöne mit Chrysanthemen, Dahlien und Herbstlaub für gemütliche Momente.', icon: 'i-mdi-flower-poppy' },
        { name: 'Winter', description: 'Festliche Arrangements mit Amaryllis, Tannengrün und Weihnachtssternen für die besinnliche Jahreszeit.', icon: 'i-mdi-flower-poppy' },
      ]"
    >
      <div class="relative after:content-[''] after:absolute after:z-[-1] after:bg-primary-500/20 after:inset-0 after:translate-y-5 after:translate-x-5">
        <NuxtImg src="/images/service-seasonal.webp" alt="Saisonale Floristik" class="w-full h-auto" />
        <div class="relative after:content-[''] after:absolute after:z-[-1] after:bg-primary-500/20 after:inset-0 after:translate-y-5 after:-translate-x-5" />
      </div>
    </ULandingSection>

    <ULandingSection
      headline="Regelmäßig frische Blumen direkt zu dir nach Hause"
      title="Blumen-Abonnement"
      description="Warum nur zu besonderen Anlässen Blumen genießen? Mit unserem Blumen-Abonnement erhältst du regelmäßig frische Blumensträuße direkt nach Hause oder ins Büro geliefert. Du bestimmst die Häufigkeit und den Stil – wir kümmern uns um den Rest."
      align="left"
      :features="[
        { name: 'Für dein Zuhause', description: 'Verleihe deinem Wohnraum regelmäßig frischen Wind und genieße die Schönheit von Blumen das ganze Jahr über.', icon: 'i-mdi-flower-poppy' },
        { name: 'Für dein Büro', description: 'Schaffe eine einladende Atmosphäre für Mitarbeiter und Besucher mit regelmäßig wechselnden Blumenarrangements.', icon: 'i-mdi-flower-poppy' },
      ]"
    >
      <div class="relative after:content-[''] after:absolute after:z-[-1] after:bg-primary-500/20 after:inset-0 after:translate-y-5 after:-translate-x-5">
        <NuxtImg src="/images/service-subscription.webp" alt="Blumen-Abonnement" class="w-full h-auto" />
      </div>
    </ULandingSection>

    <ULandingSection
      headline="Einzigartige Kreationen für besondere Momente"
      title="Individuelle Anfragen"
      description="Manchmal braucht es eine besondere Note, um einen Moment unvergesslich zu machen. Wir gestalten individuelle Blumenarrangements, die genau auf deine Wünsche abgestimmt sind. Egal ob ein überraschendes Geschenk, eine besondere Dekoration für dein Zuhause oder ein personalisiertes Arrangement für einen besonderen Anlass – wir setzen deine Ideen in die Tat um."
      align="right"
      :features="[
        { name: 'Blumengeschenke', description: 'Zeige deine Wertschätzung mit einem personalisierten Blumenstrauß, der von Herzen kommt.', icon: 'i-mdi-flower-poppy' },
        { name: 'Dekorationsservice', description: 'Wir helfen dir dabei, dein Zuhause oder deinen Veranstaltungsort blumig zu gestalten – sei es für eine Feier oder einfach so.', icon: 'i-mdi-flower-poppy' },
      ]"
    >
      <div class="relative after:content-[''] after:absolute after:z-[-1] after:bg-primary-500/20 after:inset-0 after:translate-y-5 after:translate-x-5">
        <NuxtImg src="/images/service-custom.webp" alt="Individuelle Blumenarrangements" class="w-full h-auto" />
      </div>
    </ULandingSection>
    <ULandingSection
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
