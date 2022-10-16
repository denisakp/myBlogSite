<script setup>
const topics = await queryContent('/').only('topics').find()
</script>

<template>
  <div class="page-bg">
    <div class="container">
      <h3>LES SUJETS {{topics.length}} </h3>
    </div>
  </div>
</template>

