export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/content',
        '@nuxtjs/color-mode',
        '@nuxt/image-edge'
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
        preset: 'node-server',
        compressPublicAssets: true,

    },
    ssr: true
})
