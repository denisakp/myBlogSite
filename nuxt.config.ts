export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/content',
        '@nuxtjs/color-mode'
    ],
    content: {
        highlight: {
            theme: {
                default: 'monokai',
                dark: 'min-dark'
            }
        },
    },
    colorMode: {
        classSuffix: ''
    },
    css: [
        '@/assets/styles/main.css',
        '@/assets/styles/typography.css',
        '@/assets/styles/content.scss'
    ],
    nitro: {
        prerender: {
            routes: ['/sitemap.xml']
        },
        preset: 'node-server'
    },
    ssr: true
})
