<script setup>
import config from "../utils/config";
import {useHead} from "nuxt/app";
import generateMeta from "../utils/metatag";

definePageMeta({
  key: (route) => route.fullpath
})

useHead({
  title: "Accueil",
  meta: generateMeta(),
})

const {data: navigation } = await useAsyncData("navigation", () => {
  return fetchContentNavigation(queryContent('/'))
});

const query = { limit: 10, sort: { date: -1}, only: ['title', 'description', 'tags', '_path', 'date']}

</script>

<template>
  <div class="page-bg">
    <div class="container">
      <div>
        <h3>Sujets disponibles</h3>
        <Topics :topics="navigation" />
      </div>

      <div class="mt-8">
        <h3>Derniers articles</h3>
        <section class="space-y-4 mt-8">
          <ContentList :query="query">

            <template v-slot="{ list }">
              <Post v-for="(post, index) in list" :key="index" :post="post" />
            </template>

            <template #not-found>
              <p> No articles found</p>
            </template>

            <template #empty>
              <p>No articles yet</p>
            </template>
          </ContentList>
        </section>
      </div>

    </div>
  </div>
</template>
