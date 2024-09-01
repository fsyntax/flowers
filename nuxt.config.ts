// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],

  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/image', '@nuxt/content', '@nuxtjs/seo'],

  nitro: {
    prerender: {
      failOnError: false,
      crawlLinks: true,
    },
  },

  routeRules: {
    // Temporary workaround for prerender regression. see https://github.com/nuxt/nuxt/issues/27490
    '/': { prerender: true },
    '/kontakt': { prerender: true },
    '/unser-geschaeft': { prerender: true },
    '/dienstleistungen': { prerender: true },
  },

  devtools: {
    enabled: true,
  },

  uiPro: {
    routerOptions: false,
  },

  future: {
    compatibilityVersion: 4,
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs',
      },
    },
  },

  css: [
    '~/assets/css/fonts.css',
  ],

  colorMode: {
    preference: 'light',
  },

  app: {
    head: {
      templateParams: {
        separator: '•',
        titleTemplate: '%s %separator %siteName',
      },
    },
  },

  site: {
    url: 'https://flowers.freibergersyntax.dev',
    name: 'flowers',
    description: 'Willkommen bei flowers - dein Blumenfachgeschäft in [Ort]. Wir bieten dir eine große Auswahl an Blumen, Pflanzen und Accessoires.',
    defaultLocale: 'de',
  },

  build: {
    transpile: [
      'swiper',
    ],
  },

  compatibilityDate: '2024-07-11',
})
