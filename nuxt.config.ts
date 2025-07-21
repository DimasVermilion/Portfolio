// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/tailwind.css'],


  app: {
    head: {
      title: 'Portfolio',
      meta: [
        { name: 'description', content: 'My Portfolio'}
      ],

      link: [
        {
          rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        }
      ]
    }
  },


   runtimeConfig: {
    public: {
      API_URL: process.env.NUXT_PUBLIC_API_URL || 'http://localhost:1337'
    }
  }
})
