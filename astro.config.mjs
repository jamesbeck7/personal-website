import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://jamesbeck7.github.io',
  base: process.env.BASE_PATH || '/personal-website',
})
