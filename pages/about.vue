<script setup>
import ContactComponent from "~/components/about/ContactComponent.vue";
import technos from "../data/technos";
</script>

<template>
  <div>
    <Head>
      <Title>DenisAKP — A propos de moi</Title>
      <Meta name="title" content="DenisAKP — Tutos en DevOPS, Cloud Infrastructure & Ingénierie logicielle" />
      <Meta name="description" content="Je partage gratuitement des articles et tutoriels portant sur les thématique du DevOPS, le cloud Infrastructure & l'ingénierie logicielle." />
      <Meta name="keywords" content="denisakp, devops, kubernetes, ingénierie logicielle, tutos" />
      <Meta name="og:description" content="Je partage gratuitement des articles et tutoriels portant sur les thématique du DevOPS, le cloud Infrastructure & l'ingénierie logicielle." />
      <Meta name="og:title" content="DenisAKP — A propos" />
      <Meta name="og:image" :content="config.baseUrl +'/images/meta_image.png'" />
      <Meta name="twitter:image" :content="config.baseUrl +'/images/meta_image.png'"/>
      <Meta name="twitter:tile" content="DenisAKP — A propos" />
      <Meta name="twitter:description" content="Retrouvez gratuitement des articles et tutoriels portant sur les thématique du DevOPS, le cloud Infrastructure & l'ingénierie logicielle." />
    </Head>

    <div class="page-bg">
      <div class="container">
        <!-- Présentation -->
        <div class="flex flex-col md:flex-row items-center">
          <div class="mt-8 md:ml-8 md:mt-0 text-sm md:text-base">
            <h3 class="text-center">Hello 👋 World</h3>
            <br><br>

            <img class="object-fill h-96 w-full" src="/images/about.webp" alt="profile"/>

            <p class="mt-8">
              Je m'appelle <span class="hightlighted">Denis AKPAGNONITE</span> (denisakp), actuellement en deuxième année du cycle ingénieur, spécialité Sciences de Données &
              Développement Informatique à l'ESTEM, une école d'ingénieur dans la ville de Casablanca au Maroc. </p>

            <p>Je suis un grand fan des nouvelles technologies et je me spécialise dans <span class="hightlighted">
            l'architecture, le développement & la maintenance de Backend et le Cloud Infrastructure</span>. Je suis entre temps passionné par:

            </p>

            <ul class="mt-4 list-disc ml-4 md:ml-6">
              <li><p class="mt-4">
                la philosophie du <span class="hightlighted">DevOPS</span>
              </p></li>

              <li><p class="mt-4">
                les sujets liés au <span class="hightlighted">Cloud Infrastructure. </span>
              </p></li>

              <li><p class="mt-4">la  <span class="hightlighted">sécurité des logiciels </span> (avant, pendant et après la conception)
              </p></li>

              <li><p class="mt-4">
                les tests de logiciels
              </p></li>

              <li><p class="mt-4">
                la sécurité des systèmes d'informations
              </p></li>

              <li><p class="mt-4">
                le management de vulnérabilités
              </p></li>
            </ul>

            <br>

            <h6 class="mt-4 font-medium">Parcours universitaire</h6>
            <ul class="mt-4 list-disc ml-4 md:ml-6">
              <li>Licence informatique (BAC+3), spécialité Architecture des logiciels (ESGIS Togo) 🇹🇬  </li>
              <li>Master (BAC+5 Ingénierie), spécialité Sciences de Données & Développement Informatique (en cours) 🇲🇦 </li>
            </ul>

            <br>
            <h6 class="mt-4 font-medium">Mentions</h6>
            <p>
              Je me suis inspiré du projet <span class="hightlighted"> <a href="https://loopbin.dev" target="_blank">Loopbin</a></span> de Corneil Edi pour construire ce blog avec son accord
              (😎 big up à lui). N'hésitez pas à faire un tour sur son blog! Vous en aurez pour votre compte 🤠
            </p>

          </div>
        </div>

        <!-- Contact -->
        <ContactComponent />

        <!-- Statistiques GITHUB -->
        <div class="mt-12 md:mt-16 flex flex-col md:flex-row md:justify-between  space-y-4 md:space-x-20">
          <div class="md:w-1/2">
            <h4 class="my-4">Profile Github</h4>
            <a href="https://github.com/denisakp" target="_blank">
              <img
                  src="https://github-readme-stats.vercel.app/api?username=denisakp&&show_icons=true&title_color=0c1518&icon_color=0c1518&text_color=0c1518&bg_color=15DB95"
                  alt="profile"
              />
            </a>
          </div>
          <div class="md:w-1/2">
            <h4 class="my-4">Badges</h4>
            <a href="https://www.credly.com/badges/6b64fa0a-e2bc-418a-acd9-d7ed71c635e8" target="_blank">
              <nuxt-img src="/images/isc-candidate.png" alt="ISC Candidate badge" class="h-28 md:h-32 lg:h-44" />
            </a>
          </div>
        </div>

        <!--Compétences -->
        <div class="mt-12 md:mt-16">
          <h4>Mes Centres d'intérêts</h4>

          <div class="my-4">
            <div
                v-for="tech in technos"
                :key="tech.title"
                class="w-full slick-border rounded-sm p-2 mb-5"
            >
              <p class="mx-2 text-gray-600">{{ tech.title }}</p>

              <div
                  class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1"
              >
                <div
                    v-for="item in tech.techs"
                    :key="item.title"
                    class="p-2 w-full"
                >
                  <div
                      class="h-full flex items-center slick-border rounded-sm hover:shadow-sm cursor-pointer"
                  >
                    <div class="bg-dark-low m-2 p-2 mr-4 rounded-sm">
                      <img class="mx-auto h-6 w-6 md:h-8 md:w-8 flex-shrink-0" :src="item.image" alt="technology logo"/>
                    </div>
                    <div class="flex-grow py-2 pr-2">
                      <p class="darker-text text-sm font-medium">
                        {{ item.name }}
                      </p>
                      <p class="dark-text text-xs">
                        {{ item.description || '' }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.img-cont img {
  @apply max-w-full h-auto rounded-lg;
}
</style>
