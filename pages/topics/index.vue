<script setup>
import config from "../../utils/config";
const topics = await queryContent('/').only('topics').find()
</script>

<template>
  <div>
    <Head>
      <Title>Topics — DenisAKP</Title>
      <Meta name="title" content="DenisAKP — Topics" />
      <Meta name="description" content="Liste des sujets que couvrent mes articles" />
      <Meta name="keywords" content="denisakp,topics" />
      <Meta name="og:description" content="Liste des sujets que couvrent mes articles" />
      <Meta name="og:title" content="DenisAKP — Topics" />
      <Meta name="og:image" :content="config.baseUrl +'/images/meta_image.png'" />
      <Meta name="twitter:image" :content="config.baseUrl +'/images/meta_image.png'" />
      <Meta name="twitter:tile" content="DenisAKP — Topics" />
      <Meta name="twitter:description" content="Liste des sujets que couvrent mes articles" />
    </Head>

    <div class="page-bg">
      <div class="container">
        <h3>LES SUJETS {{topics.length}} </h3>
      </div>
    </div>
  </div>
</template>

