<template>
  <div class="page-bg">
    <div class="container">
      <div>
        <h3>Sujets disponibles</h3>
        <Topics :topics="navigation[0].children.sort()" />
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

<script setup>
definePageMeta({
  title: 'Accueil',
  description: 'My page best description ever'
})

const {data: navigation } = await useAsyncData("navigation", () => {
  return fetchContentNavigation(queryContent("blog"))
});

const latestArticles = await queryContent('blog')
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
    .find()
</script>
