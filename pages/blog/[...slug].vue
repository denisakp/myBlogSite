<script setup>
import {useRoute} from "nuxt/app";
import PrevNext from "../../components/PrevNext";

const { path } = useRoute();
const reviewedPath = path.replace("/blog", '')

const article = await queryContent().where({ _path: reviewedPath }).findOne()
const surround = await queryContent('/').only(['_path', 'title', 'slug', 'topics']).sort({ date: 1}).findSurround(reviewedPath)

const [prev, next] = surround

onMounted(() => {
  const giscus = document.createElement('script')
  giscus.setAttribute('src', 'https://giscus.app/client.js')
  giscus.setAttribute('async', 'true')
  giscus.setAttribute('data-repo', 'denisakp/myBlogSite')
  giscus.setAttribute('data-repo-id', 'R_kgDOIaV8gQ')
  giscus.setAttribute('data-category-id', 'Announcements')
  giscus.setAttribute('data-mapping', 'pathname')
  giscus.setAttribute('data-strict', '0')
  giscus.setAttribute('data-reactions-enabled', '1')
  giscus.setAttribute('data-emit-metadata', '0')
  giscus.setAttribute('data-input-position', 'bottom')
  giscus.setAttribute('data-theme', 'preferred_color_scheme')
  giscus.setAttribute('data-loading', 'lazy')
  giscus.setAttribute('crossorigin', 'anonymous')
  document.body.appendChild(giscus)
})

</script>

<template>
  <div>
    <Head>
      <Title>{{ article.title }}</Title>
      <Meta name="title" :content="article.title" />
      <Meta name="description" :content="article.description" />
      <Meta name="keywords" :content="article.tags.toString()" />
      <Meta name="og:description" :content="article.description" />
      <Meta name="og:title" :content="article.title" />
      <Meta name="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
      <Meta name="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
      <Meta name="twitter:tile" :content="article.title" />
      <Meta name="twitter:description" :content="article.description" />
    </Head>
    <div class="page-bg">
      <div class="container">
        <div class="w-full">
          <h3 class="my-2 dark-text">{{ article.title }}</h3>
          <p class="mt-2 mb-4 md:mb-8 dark-text">{{ article.description }}</p>
        </div>

        <!-- Toc Component -->
        <Toc :links="article.body.toc.links" />

        <div class="w-full">
          <content-renderer :value="article" class="nuxt-content">

            <template #empty>
              <p>No content found.</p>
            </template>
          </content-renderer>
        </div>

        <!-- PrevNext Component -->
        <PrevNext :prev="prev" :next="next" />
        <br />
        <br />

        <div class="w-full giscus"></div>
      </div>
    </div>
  </div>
</template>
