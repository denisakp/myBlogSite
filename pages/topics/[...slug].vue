<script setup>
import {ref} from "vue";
import technos from "../../data/technos";

const route = useRoute()

const slug = ref(route.params.slug[0])

let techno

technos.map((element) => {
  return element.techs.find((item) => {
    if(item.slug === slug.value) {
      techno = item
    }
  })
})

const posts = await queryContent().where({ topics: { $contains: slug.value }}).only('path').find()

const query = { where: { topics: { $contains: slug.value } }, limit: 10, sort: { date: -1 }, only: ['title', 'description', 'tags', '_path', 'date'] }

</script>

<template>
  <div>
    <Head>
      <Title>{{ techno.name }}</Title>
      <Meta name="title" :content="techno.name" />
      <Meta name="description" :content="techno.description" />
      <Meta name="keywords" :content="'denisakp,' + slug" />
      <Meta name="og:description" :content="techno.description" />
      <Meta name="og:title" :content="techno.name" />
      <Meta name="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
      <Meta name="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
      <Meta name="twitter:tile" :content="techno.name" />
      <Meta name="twitter:description" :content="techno.description" />
    </Head>

    <div class="page-bg">
      <div v-if="techno" class="container">
        <section class="text-dark mb-12">
          <div class="h-full flex items-center slick-border p-2 rounded-sm">
            <div class="bg-dark-low p-4 mr-4 rounded-sm">
              <img
                  class="mx-auto h-16 w-16 lg:w-24 flex-shrink-0"
                  :src="techno.image"
                  :alt="techno.name + ' logo'"
              />
            </div>
            <div class="flex-grow">
              <h4 class="darker-text">
                {{ techno.name }}
              </h4>
              <p class="dark-text">
                {{ techno.description }}
              </p>
            </div>
          </div>
        </section>

        <h4 class="mb-4">Articles ({{ posts.length }})</h4>

        <section class="space-y-4">
          <ContentList :query="query">

            <template v-slot="{ list }">
              <Post v-for="(post, index) in list" :key="index" :post="post" />
            </template>

            <template #not-found>
              <p> Sorry no articles found</p>
            </template>

            <template #empty>
              <p>No articles yet</p>
            </template>
          </ContentList>
        </section>
      </div>
      <div v-else class="container">
        <section class="space-y-4">
          <p>Error 404</p>
        </section>
      </div>
    </div>
  </div>
</template>
