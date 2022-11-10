<script setup>
import {useAsyncData, useRoute} from "nuxt/app";
import PrevNext from "../../components/PrevNext";

const { path } = useRoute();
const reviewedPath = path.replace("/blog", '')

const { data } = await useAsyncData(`content-${reviewedPath}`,  async () => {
  let article = queryContent().where({ _path: reviewedPath }).findOne()
  let surround = queryContent('/').only(['_path', 'title', 'slug']).sort({ date: 1}).findSurround(reviewedPath)

  return { article: await article, surround: await surround}
});

const [prev, next] = data.value.surround
</script>

<template>
  <div class="page-bg">
    <div class="container-small">
      <div class="w-full">
        <h3 class="my-2 dark-text">{{ data.article.title }}</h3>
        <p class="mt-2 mb-4 md:mb-8 dark-text">{{ data.article.description }}</p>
      </div>

      <!-- Toc Component -->
      <Toc :links="data.article.body.toc.links" />

      <div class="w-full">
        <content-renderer :value="data.article" class="nuxt-content">

          <template #empty>
            <p>No content found.</p>
          </template>
        </content-renderer>
      </div>

      <!-- PrevNext Component -->
      <PrevNext :prev="prev" :next="next" />
    </div>
  </div>
</template>
