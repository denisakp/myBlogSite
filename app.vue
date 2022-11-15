<script setup>
import Header from './components/shared/Header.vue';
import BottomHeader from './components/shared/BottomHeader.vue';
import {useHead, useRoute} from "nuxt/app";

const route = useRoute()

useHead({
  titleTemplate: (titleChunk) => titleChunk ? `${titleChunk} - DenisAKP` : 'DenisAKP',
  title:"DenisAKP — Tutos en DevOPS, Cloud Infrastructure & Ingénierie logicielle",
  meta: [
    { name: 'viewport', content: "width=device-width, initial-scale=1.0"},
    { name: 'charset', content: 'UTF-8' },
    { name: 'author', content: 'Denis AKPAGNONITE'},
    { name: 'robots', content: 'index, follow'},
    { name: 'format-detection', content: 'telephone=no'},
    { name: 'og:type', content: 'website' },
    { name: 'og:url', content: 'https://denisakp.me'+route.fullPath },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:url', content: 'https://denisakp.me'+route.fullPath },
  ],
  link: [
    { rel: "canonical", href: "https://denisakp.me" },
    { rel: "apple-touch-icon", type: "image/png",sizes:"180x180",   href: "/favicon/apple-touch-icon.png" },
    {rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico'},
    { rel: "icon", type: "image/png", sizes:"32x32",   href: "/favicon/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes:"16x16",   href: "/favicon/favicon-16x16.png" },
    { color:"#5bbad5", rel: "mask-icon",  href: "/favicon/safari-pinned-tab.svg" },
    { rel: "manifest", href: "/favicon/site.webmanifest" },
  ],
  script: [
    {
      async: true,
      src: "https://www.googletagmanager.com/gtag/js?id=G-110JN254M7"
    },
    {
      children: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-110JN254M7');`
    }
  ],
  noscript: [
    {
      body: true,
      children: ``
    }
  ]
})
</script>

<template>
  <div class="w-full bg-white dark:bg-dark-high text-dark-high dark:text-white" :class="$colorMode.preference === 'dark' ? 'dark' : ''">
    <Header />
    <div class="pt-20 md:pt-24 min-h-screen">
      <NuxtPage />
    </div>
    <BottomHeader />
  </div>
</template>
