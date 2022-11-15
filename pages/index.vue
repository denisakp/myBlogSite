<script setup>

import {useAsyncData} from "nuxt/app";

const {data: navigation } = await useAsyncData("navigation", () => {
  return fetchContentNavigation()
});

const query = { limit: 7, sort: { date: -1 }, only: ['title', 'description', 'tags', '_path', 'date']}

</script>

<template>
  <div>
    <Head>
      <Title>Accueil</Title>
      <Meta name="title" content="Accueil" />
      <Meta name="description" content="Retrouvez gratuitement des articles et tutoriels portant sur les thématique du DevOPS, le cloud Infrastructure & l'ingénierie logicielle." />
      <Meta name="keywords" content="denisakp, devops, ingénierie logicielle, tutos" />
      <Meta name="og:description" content="Retrouvez gratuitement des articles et tutoriels portant sur les thématique du DevOPS, le cloud Infrastructure & l'ingénierie logicielle." />
      <Meta name="og:title" content="Accueil" />
      <Meta name="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
      <Meta name="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
      <Meta name="twitter:tile" content="Accueil" />
      <Meta name="twitter:description" content="Retrouvez gratuitement des articles et tutoriels portant sur les thématique du DevOPS, le cloud Infrastructure & l'ingénierie logicielle." />
    </Head>
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
  </div>
</template>
