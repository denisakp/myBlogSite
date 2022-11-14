<script setup>
import {ref, onMounted} from "vue";
import {useAsyncData, useRoute} from "nuxt/app";
import Paginate from '../../../components/shared/Paginate.vue';

const route = useRoute()

const articlesCount = (await queryContent('/').find()).length

const perPage = ref(14)
const currentPage = ref(parseInt(route.params.page))
const lastPage = Math.ceil(articlesCount / perPage.value)
const lastPageCount = articlesCount % perPage.value === 0 ? perPage.value : articlesCount % perPage.value
const skipNumber = () => {
  return (currentPage.value === 1)
      ? 0
      : (currentPage.value === lastPage) ?
          articlesCount - lastPageCount :
          (currentPage.value - 1) * perPage.value
}

const {data: articles, refresh} = await useAsyncData("articles", () => {
  return  queryContent('/').skip(skipNumber()).limit(perPage.value).sort({ date: -1 }).find()
})

onMounted(() => {
  refresh()
  window.scrollTo(0,0)
})

</script>

<template>
  <div>
    <Head>
      <Title>Articles</Title>
      <Meta name="title" content="Articles" />
      <Meta name="description" content="Retrouvez la liste des articles que j'ai écrit ou co-écrit" />
      <Meta name="keywords" content="denisakp,articles" />
      <Meta name="og:description" content="Retrouvez la liste des articles que j'ai écrit ou co-écrit" />
      <Meta name="og:title" content="Articles" />
      <Meta name="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
      <Meta name="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
      <Meta name="twitter:tile" content="Articles" />
      <Meta name="twitter:description" content="Retrouvez la liste des articles que j'ai écrit ou co-écrit" />
    </Head>

    <div class="page-bg">
      <div class="container">
        <h5> Articles ({{ articlesCount }})</h5>
        <div class="flex flex-wrap my-4">
          <div class="p-2 lg:w-1/2 w-full" v-for="(post, index) in articles" :key="index">
            <Post :post="post" />
          </div>
        </div>
        <div class="w-full flex justify-center items-center">
          <Paginate :total="articlesCount" :per-page="perPage" />
        </div>
      </div>
    </div>
  </div>
</template>
