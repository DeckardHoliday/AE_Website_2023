<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFilm,
  faWandMagicSparkles,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      faFilm,
      faMusic,
      faWandMagicSparkles,
    };
  },
};
</script>

<template>
  <h2 class="text-xl font-semibold text-gray-900 dark:text-white m-0 p-0">
    Commission Type
  </h2>
  <p class="text-lg text-gray-900 dark:text-white m-0 p-0">
    Select the commission type you're looking for.
  </p>
  <hr />
  <div class="flex justify-center items-center">
    <the-card
      class="flex-1 m-2 p-2 flex flex-col flex-wrap justify-center cursor-pointer rounded-lg hover:-translate-y-0.5 transition-transform ease-in-out"
    >
      <FontAwesomeIcon
        :icon="faFilm"
        class="text-black dark:text-white mb-5 px-16 flex-1"
      />
      <h5
        class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white"
      >
        Film / Games
      </h5>
      <p
        class="font-normal text-center text-gray-700 dark:text-gray-400 flex-100"
      >
        Sound for animations, films, or games
      </p>
    </the-card>
    <the-card
      class="flex-1 m-2 p-2 flex flex-col flex-wrap justify-center cursor-pointer rounded-lg hover:-translate-y-0.5 transition-transform ease-in-out"
    >
      <FontAwesomeIcon
        :icon="faWandMagicSparkles"
        class="text-black dark:text-white mb-5 px-16 flex-1"
      />
      <h5
        class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white"
      >
        Editing / Repair
      </h5>
      <p
        class="font-normal text-center text-gray-700 dark:text-gray-400 flex-100"
      >
        Recording repair/editing for VO and Podcasts
      </p>
    </the-card>
    <the-card
      class="flex-1 m-2 p-2 flex flex-col flex-wrap justify-center cursor-pointer rounded-lg hover:-translate-y-0.5 transition-transform ease-in-out"
    >
      <FontAwesomeIcon
        :icon="faMusic"
        class="text-black dark:text-white mb-5 px-16 flex-1"
      />
      <h5
        class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white"
      >
        Music Mixing
      </h5>
      <p
        class="font-normal text-center text-gray-700 dark:text-gray-400 flex-100"
      >
        Mixing and Mastering services for music
      </p>
    </the-card>
  </div>
</template>
