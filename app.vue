<script setup>
import {useHead, useRoute} from "nuxt/app";
import Header from '~/components/shared/Header.vue';
import BottomHeader from '~/components/shared/BottomHeader.vue';
const route = useRoute()

useHead({
  titleTemplate: (title) => `Denis AKPAGNONITE - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  htmlAttrs:  {
    lang: 'fr'
  },
  meta: [
    { name: 'description', content: 'My amazing site.' },
    { name: 'language', content: 'French' },
    { name: 'og:type', content: 'website' },
    { name: 'og:url', content: 'https://denisakp.me' },
    { name: 'og:title', content: `Denis AKPAGNONITE - ${route.meta.title}` },
    { name: 'og:description', content: `Denis AKPAGNONITE - ${route.meta.description}` },
    { name: 'og:image', content: 'https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:url', content: 'https://denisakp.me' },
    { name: 'twitter:tile', content: 'Denis AKPAGNONITE' },
    { name: 'twitter:description', content: 'Description de mon site web' },
    { name: 'twitter:image', content: 'https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png' },
  ],
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
