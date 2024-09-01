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
    button: {
      base: 'font-glory font-bold tracking-wide',
      size: {
        lg: 'text-lg ',
      },
    },
    input: {
      default: {
        size: 'xl',
      },
      color: {
        white: {
          outline: 'shadow-none ring-primary-500/20',
        },
      },
      variant: {
        outline: '!shadow-none ring-primary-500/20',
      },
      rounded: 'rounded-none',
    },
    textarea: {
      default: {
        size: 'xl',
      },
      color: {
        white: {
          outline: 'shadow-none ring-primary-500/20',
        },
      },
      rounded: 'rounded-none',
    },
    formGroup: {
      label: {
        base: 'font-glory text-lg tracking-wide',
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
