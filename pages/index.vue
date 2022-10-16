<script setup>

definePageMeta({
  title: 'Accueil',
  description: 'My page best description ever'
})

const {data: navigation } = await useAsyncData("navigation", () => {
  return fetchContentNavigation(queryContent('/'))
});

const {data: latestArticles} = await useAsyncData('latestArticles', () => {
  return queryContent('/')
      .only([
        'slug',
        'title',
        'description',
        'date',
        'path',
        'tags',
        'topics',
        'path',
        'dir',
      ])
      .limit(5)
      .sort({ date: -1})
      .find()
})
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
          <Post
              v-for="(post, index) in latestArticles"
              :key="index"
              :post="post"
          />
        </section>
      </div>

    </div>
  </div>
</template>
