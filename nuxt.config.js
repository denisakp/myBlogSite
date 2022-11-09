// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/content',
        '@nuxtjs/color-mode'
    ],
    content: {
        highlight: {
            theme: {
                default: 'material-palenight',
                dark: 'github-dark'
            }
        },
        markdown: {
            toc: {
                depth: 5,
                searchDepth: 5
            }
        }
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
