import config from "./utils/config";

export default defineNuxtConfig({
    target: "static",
    ssr: false,
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/content',
        '@nuxtjs/color-mode',
        '@nuxtjs/robots'
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
    robots: {
        UserAgent: '*',
        Disallow: '/',
        sitemap: () => `${config.baseUrl}/sitemap.xml`
    },
    nitro: {
        prerender: {
            routes: ['/sitemap.xml']
        },
        preset: "service-worker"
    }
})
