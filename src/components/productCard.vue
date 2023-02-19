<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

export default {
  props: {
    title: String,
    tagline: String,
    description: String,
    price: Number,
    url: String,
    image: String,
  },
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div
    class="w-full max-w-sm p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-black dark:border-black"
  >
    <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
      {{ title }}
    </h5>
    <div class="flex items-baseline text-gray-900 dark:text-white">
      <span class="text-3xl font-semibold">$</span>
      <span class="text-5xl font-extrabold tracking-tight">
        {{ price }}
      </span>
      <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
        / {{ per }}
      </span>
    </div>
    <div>
      <span class="ml-1 text-lg font-thin text-gray-600 dark:text-gray-200">
        {{ disclaimer }}
      </span>
    </div>
    <!-- List -->
    <ul
      role="list"
      class="my-7"
      v-for="feature in features"
      :key="feature.description"
    >
      <div v-if="feature.included == true">
        <li class="flex space-x-3">
          <!-- Icon -->
          <FontAwesomeIcon :icon="faCheck" />
          <span
            class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
          >
            {{ feature.description }}
          </span>
        </li>
      </div>

      <div v-else-if="feature.included == false">
        <li class="flex space-x-3 decoration-gray-500">
          <!-- Icon -->
          <FontAwesomeIcon :icon="faXmark" />
          <span
            class="ml-5 text-base font-normal leading-tight text-gray-500"
            >{{ feature.description }}</span
          >
        </li>
      </div>
    </ul>
    <button
      type="button"
      data-modal-toggle="post-audio-modal"
      data-modal-target="post-audio-modal"
      class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center dark:bg-black"
    >
      Submit Request
    </button>
  </div>
</template>
