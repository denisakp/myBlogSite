<script setup>

defineProps({
  topics: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class="flex flex-wrap my-4">
    <div
        v-for="(item, index) in topics"
        :key="index"
        class="p-2 lg:w-1/6 md:w-1/4 w-1/2"
    >
      <nuxt-link :to="item._path">
        <div
            class="h-full flex items-center p-2 rounded-sm hover:shadow-sm slick-border dark-text"
        >
          <div class="bg-dark-low p-3 mr-4 rounded-sm">
            <img
                class="mx-auto h-5 w-5 flex-shrink-0"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" :alt="item"
            />
          </div>
          <div class="flex-grow">
            <p class="font-medium">
              {{ item.title }}
            </p>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
