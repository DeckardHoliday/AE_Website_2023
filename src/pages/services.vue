<script>
import PriceCard from "../components/priceCard.vue";

import {
  post_services,
  editing_services,
  music_services,
} from "../assets/services";

export default {
  data() {
    return {
      post_items: post_services,
      editing_items: editing_services,
      music_items: music_services,
    };
  },
  components: {
    PriceCard,
  },
};
</script>

<template>
  <section>
    <h4
      class="text-center my-7 mb-32 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white"
    >
      Pricing
    </h4>

    <div class="text-white text-xl">
      <div id="post-audio" class="my-24">
        <h1
          class="text-center mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white"
        >
          Post Production Audio
        </h1>
        <p
          class="mx-32 mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
        >
          Probably what I'm most known for! If you have a film or animation that
          you need sound design, editing, and mixing for I've got some options
          for you!
        </p>

        <ul class="flex justify-center align-center">
          <li
            class="flex mx-8"
            v-for="service in post_items"
            :key="service.title"
          >
            <PriceCard
              :title="service.title"
              :price="service.price"
              :per="service.per"
              :features="service.features"
            />
          </li>
        </ul>
      </div>

      <div id="audio-editing" class="my-24">
        <h1
          class="text-center mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white"
        >
          Editing and Restoration
        </h1>
        <p
          class="mx-32 mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
        >
          Probably what I'm most known for! If you have a film or animation that
          you need sound design, editing, and mixing for I've got some options
          for you!
        </p>
        <!-- -->
        <ul class="flex justify-center align-center">
          <li
            class="flex mx-8"
            v-for="service in editing_items"
            :key="service.title"
          >
            <PriceCard
              :title="service.title"
              :price="service.price"
              :per="service.per"
              :features="service.features"
            />
          </li>
        </ul>
      </div>

      <div id="music-editing" class="my-24">
        <h1
          class="text-center mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white"
        >
          Music Mixing and Mastering
        </h1>
        <p
          class="mx-32 mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
        >
          Probably what I'm most known for! If you have a film or animation that
          you need sound design, editing, and mixing for I've got some options
          for you!
        </p>
        <ul class="flex justify-center align-center">
          <li
            class="flex mx-8"
            v-for="service in music_items"
            :key="service.title"
          >
            <PriceCard
              :title="service.title"
              :price="service.price"
              :per="service.per"
              :features="service.features"
            />
          </li>
        </ul>
      </div>

      <div id="game-audio">
        <h1
          class="text-center mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white"
        >
          Game Audio
        </h1>
        <p
          class="mx-32 mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
        >
          Probably what I'm most known for! If you have a film or animation that
          you need sound design, editing, and mixing for I've got some options
          for you!
        </p>
      </div>
    </div>
  </section>
</template>
