<template>
  <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6  dark:bg-dark-high border-b border-dark-low dark:border-dark">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {{ new Date().getUTCFullYear() }} <a href="https://denisakp.me/" class="hover:underline">DenisAKP — Tutos en DevOPS, Cloud Infrastructure & Ingénierie logicielle</a>.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
      <li>
        <a href="/" class="mr-4 hover:underline md:mr-6 ">Accueil</a>
      </li>
      <li>
        <a href="/blog" class="mr-4 hover:underline md:mr-6">Blog</a>
      </li>
      <li>
        <a href="/projets" class="mr-4 hover:underline md:mr-6">Projets</a>
      </li>
      <li>
        <a href="mailto:akpagnonited@outlook.com" class="hover:underline">Contact</a>
      </li>
    </ul>
  </footer>
</template>
