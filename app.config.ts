export default defineAppConfig({
  ui: {
    primary: 'asparagus',
    gray: 'stone',
    landing: {
      section: {
        title: 'font-glory text-5xl md:text-5xl lg:text-6xl xl:text-7xl',
        headline: 'font-merriweather',
      },
    },
    variables: {
      light: {
        background: '254 254 250',
        foreground: 'var(--color-gray-900)',
      },
      dark: {
        background: 'var(--color-gray-900)',
        foreground: '254 254 250',
      },
      header: {
        height: '3rem',
      },
    },
  },
})
