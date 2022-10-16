<script setup>
import topics from "../../data/topics";
const route = useRoute()

const { data: inQuery } = await useAsyncData('in', () => {
  return queryContent()
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
      .where(
          { topics:
                {
                  $contains: route.params.slug
                }
          }
      )
      .sort({ date: -1})
      .find()
})

</script>

<template>
  <div class="page-bg">
    <div class="container">
      <section class="text-dark mb-12">
        <div class="h-full flex items-center slick-border p-2 rounded-sm">
          <div class="bg-dark-low p-4 mr-4 rounded-sm">
            <img
                class="mx-auto h-16 w-16 lg:w-24 flex-shrink-0"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/composer/composer-original.svg"
            />
          </div>
          <div class="flex-grow">
            <h4 class="darker-text">
              Hello
            </h4>
            <p class="dark-text">
              World
            </p>
          </div>
        </div>
      </section>

      <h4 class="mb-4">Tutos ({{ inQuery.length }})</h4>

      <section class="space-y-4">
        <Post
            v-for="(post, index) in inQuery"
            :key="index"
            :post="post"
        />
      </section>
    </div>
  </div>
</template>
