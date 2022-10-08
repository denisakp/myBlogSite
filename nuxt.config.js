// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/content',
        '@nuxtjs/color-mode'
    ],
    content: {
        markdown: {
            prism: {
                theme: false
            }
        },
        highlight: {
            theme: {
                default: 'github-light',
                dark: 'github-dark'
            }
        },
        documentDriven: true
    },
    colorMode: {
        classSuffix: ''
    },
    css: [
        '@/assets/styles/main.css',
        '@/assets/styles/typography.css',
        '@/assets/styles/content.scss'
    ]
})
