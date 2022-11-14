<script setup>
const topics = await queryContent('/').only('topics').find()

</script>

<template>
  <div>
    <Head>
      <Title>Topics</Title>
      <Meta name="title" content="Topics" />
      <Meta name="description" content="Liste des sujets que couvrent mes articles" />
      <Meta name="keywords" content="denisakp,topics" />
      <Meta name="og:description" content="Liste des sujets que couvrent mes articles" />
      <Meta name="og:title" content="Topics" />
      <Meta name="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
      <Meta name="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
      <Meta name="twitter:tile" content="Topics" />
      <Meta name="twitter:description" content="Liste des sujets que couvrent mes articles" />
    </Head>

    <div class="page-bg">
      <div class="container">
        <h3>LES SUJETS {{topics.length}} </h3>
      </div>
    </div>
  </div>
</template>

