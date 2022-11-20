<script setup>
import config from "../utils/config";

const {data: navigation } = await useAsyncData("navigation", () => {
  return fetchContentNavigation()
});

const query = { limit: 7, sort: { date: -1 }, only: ['title', 'description', 'tags', '_path', 'date']}

</script>

<template>
  <div>
    <Head>
      <Title>DenisAKP — Tutos en DevOPS, Cloud Infrastructure & Ingénierie logicielle</Title>
      <Meta name="title" content="DenisAKP — Tutos en DevOPS, Cloud Infrastructure & Ingénierie logicielle" />
      <Meta name="description" content="Je partage gratuitement des articles et tutoriels portant sur les thématique du DevOPS, le cloud Infrastructure & l'ingénierie logicielle." />
      <Meta name="keywords" content="denisakp, devops, kubernetes, ingénierie logicielle, tutos" />
      <Meta name="og:description" content="Je partage gratuitement des articles et tutoriels portant sur les thématique du DevOPS, le cloud Infrastructure & l'ingénierie logicielle." />
      <Meta name="og:title" content="DenisAKP — Tutos en DevOPS, Cloud Infrastructure & Ingénierie logicielle" />
      <Meta name="og:image" :content="config.baseUrl +'/images/meta_image.png'" />
      <Meta name="twitter:image" :content="config.baseUrl +'/images/meta_image.png'" />
      <Meta name="twitter:tile" content="DenisAKP — Tutos en DevOPS, Cloud Infrastructure & Ingénierie logicielle" />
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

<style scoped>
.img-cont img {
  @apply h-full w-full object-cover;
}
</style>
