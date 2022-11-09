<script setup>
import {useAsyncData, useRoute} from "nuxt/app";

const slug = useRoute().params.slug

const { path } = useRoute();

console.log(path)
const { data } = await useAsyncData(`content-${path}`, async() => {
  let article = queryContent().where({ _path: path}).findOne();
  let surround = queryContent().only(["_path", "title", "slug"]).sort({ date: 1}).findSurround(path);
  return {
    article: await article,
    surround: await surround
  }
});

const [prev, next] = data.value.surround;

</script>

<template>
  <div class="page-bg">
    <div class="container-small">
      <div class="w-full">
        <h3 class="my-2 dark-text">{{ data.article.title }}</h3>
        <p class="mt-2 mb-4 md:mb-8 dark-text">{{ data.article.description }}</p>
      </div>

      <Toc :links="data.article.body.toc.links" />

      <article class="w-full">
        <!-- render document coming from query -->
        <ContentRenderer :value="data.article">
          <!-- render rich text from document -->
          <MarkdownRenderer :value="data.article" />

          <!-- display if document content is empty -->
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
      </article>



      <div
          class="mt-6 md:mt-12 mx-4 flex flex-col md:flex-row  justify-end  space-y-4 md:space-x-4 md:space-y-0"
          :class="{
            'justify-between': prev!== null && next !== null,
            'justify-start': prev!== null && next === null
           }"
      >

        <nuxt-link
            v-if="prev"
            :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
            class="slick-border slick-hover px-4 py-4 cursor-pointer text-sm">

          <div

              class="flex flex-row flex-nowrap items-center space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 dark-text">
              <path fill="none" d="M0 0h24v24H0z"/>
              <path fill="currentColor" d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"/>
            </svg>
            <div>
              <p class="dark-text text-xs">Précedent</p>
              <p class="darker-text">{{ prev.title }}</p>
            </div>
          </div>

        </nuxt-link>

        <nuxt-link
            v-if="next"
            :to="{ name: 'blog-slug', params: { slug: next.slug } }"
            class="slick-border slick-hover px-4 py-4 cursor-pointer text-sm">
          <div

              class="flex flex-row flex-nowrap items-center space-x-4">

            <div>
              <p class="dark-text text-xs">Prochain</p>
              <p class="darker-text">{{ next.title }}</p>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 dark-text">
              <path fill="none" d="M0 0h24v24H0z"/>
              <path fill="currentColor" d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/>
            </svg>
          </div>

        </nuxt-link>

      </div>
    </div>
  </div>
</template>
