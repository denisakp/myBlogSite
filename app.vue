<script setup>
import Header from './components/shared/Header.vue';
import BottomHeader from './components/shared/BottomHeader.vue';
</script>

<template>
  <div class="w-full bg-white dark:bg-dark-high text-dark-high dark:text-white" :class="$colorMode.preference === 'dark' ? 'dark' : ''">
    <Header />
    <div class="pt-20 md:pt-24 min-h-screen">
      <NuxtPage />
    </div>
    <BottomHeader />
  </div>
</template>
