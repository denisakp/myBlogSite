import config from "./utils/config";
import generateMeta from "./utils/metatag"

const meta = generateMeta()

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/content',
        '@nuxtjs/color-mode',
        '@nuxtjs/robots'
    ],
    content: {
        highlight: {
            theme: {
                default: 'material-palenight',
                dark: 'github-dark'
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
    ],
    robots: {
        UserAgent: '*',
        Disallow: '/',
        sitemap: () => `${config.baseUrl}/sitemap.xml`
    },
    nitro: {
        prerender: {
            routes: ['/sitemap.xml']
        }
    },
    app: {
        head: {
            titleTemplate: (title) => title ? `${title} - ${config.site.name}` : config.site.name ,
            title: `Denis AKPAGNONITE`,
            charset: 'utf-8',
            htmlAttrs:  { lang: 'fr' },
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {name: 'format-detection', content: 'telephone=no'},
                ...meta
            ]
        },
        link: [
            {hid: 'canonical', rel: 'canonical', href: config.baseUrl},
            {rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico'}
        ]
    }
})
