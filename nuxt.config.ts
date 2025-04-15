// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_API_BASE_URL || '',
    },
  },

  modules: ['@nuxt/eslint', '@nuxt/image', 'shadcn-nuxt', '@nuxtjs/i18n'],
  css: ['@/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },

  i18n: {
    locales: [
      { code: 'en', language: 'en-US', file: 'en.json' },
      { code: 'vi', language: 'vi-VN', file: 'vi.json' },
    ],
    defaultLocale: 'en',
  },

  compatibilityDate: '2025-04-14',
})
