<script>
import {
  faTwitter,
  faMastodon,
  faItchIo,
  faTumblrSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: { FontAwesomeIcon },
  props: {
    text_size: String,
    text_color: String,
  },
  data() {
    return {
      faTwitter,
      faMastodon,
      faItchIo,
      faTumblrSquare,
    };
  },
  methods: {
    get_classes(size, color) {
      return `${size}  flex mt-4 text-black dark:text-white space-x-5 lg:space-x-10 sm:justify-center sm:mt-0`;
    },
  },
};
</script>

<template>
  <div :class="get_classes(text_size, text_color)">
    <a
      href="https://twitter.com/AudioElk/"
      target="_blank"
      class="hover:text-gray-900 dark:hover:text-gray-300"
    >
      <FontAwesomeIcon :icon="faTwitter" />
      <span class="sr-only">Twitter page</span>
    </a>
    <a
      href="https://meow.social/@audioelk"
      target="_blank"
      class="hover:text-gray-900 dark:hover:text-gray-300"
    >
      <FontAwesomeIcon :icon="faMastodon" />
      <span class="sr-only">Mastodon page</span>
    </a>
    <a
      href="https://deckards-audio-corner.tumblr.com/"
      target="_blank"
      class="hover:text-gray-900 dark:hover:text-gray-300"
    >
      <FontAwesomeIcon :icon="faTumblrSquare" />
      <span class="sr-only">Tumblr page</span>
    </a>
    <a
      href="https://audioelk.itch.io/"
      target="_blank"
      class="hover:text-gray-900 dark:hover:text-gray-300"
    >
      <FontAwesomeIcon :icon="faItchIo" />
      <span class="sr-only">Itchio Page </span>
    </a>
  </div>
</template>
