<script setup>
import {ref, onMounted} from "vue";
import {useAsyncData, useHead, useRoute} from "nuxt/app";
const route = useRoute()
import Paginate from '../../../components/shared/Paginate.vue';
import generateMeta from "../../../utils/metatag";

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
  return  queryContent('/').skip(skipNumber()).limit(perPage.value).sort({date: -1}).find()
})

onMounted(() => {
  refresh()
  window.scrollTo(0,0)
})

useHead({
  title: "Mes articles",
  description: "Parcourez l'ensemble des articles que j'ai écrit",
  meta: generateMeta()
})
</script>

<template>
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
</template>
