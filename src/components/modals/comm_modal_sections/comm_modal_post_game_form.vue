<script>
import { Input } from "flowbite-vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFilm,
  faWandMagicSparkles,
  faMusic,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const form_data = {
  comm_type: "",
  name: "",
  preferred_contact_username: "",
  preferred_contact_method: "",
  email: "",
  tier: "",
  source: "",
};

export default {
  components: {
    FontAwesomeIcon,
    Input,
  },
  data() {
    return {
      faUser,
      comm_type: "post",
      form_data,
    };
  },
};
</script>

<template>
  <h2 class="text-xl font-semibold text-gray-900 dark:text-white m-0 p-0">
    Post and Game Audio Commissions
  </h2>
  <p class="text-lg text-gray-900 dark:text-white m-0 p-0">
    Please provide details about your project!
  </p>
  <hr />
  <div>
    <div>
      <div class="flex items-center">
        <label
          class="flex-1 text-2xl text-black dark:text-white font-bold"
          for="comm_type"
          >Commission Type:
        </label>
        <div
          class="flex-1 flex justify-center items-center text-black dark:text-white font-bold"
        >
          <input
            class="bg-white border-black dark:bg-stone-900 dark:border-white mx-5"
            type="radio"
            id="post_audio_radio"
            name="comm_type"
            value="Post Audio"
            v-model="form_data.comm_type"
          />
          <label class="text-xl m-0 p-0" for="post_audio_radio"
            >Post Audio</label
          >
        </div>
        <div
          class="flex-1 flex justify-center items-center text-black dark:text-white font-bold"
        >
          <input
            class="bg-white border-black dark:bg-stone-900 dark:border-white mx-5"
            type="radio"
            id="game_audio_radio"
            name="comm_type"
            value="Game Audio"
            v-model="form_data.comm_type"
          />
          <label class="text-xl m-0 p-0" for="game_audio_radio"
            >Game Audio</label
          >
        </div>
      </div>
      <div class="flex justify-center items-center m-5">
        <div class="flex flex-wrap m-0 p-0 col-auto">
          <label
            class="w-full text-lg font-bold text-black dark:text-white"
            for="name"
            >Name</label
          >
          <input
            class="h-10 p-2 rounded bg-white dark:bg-stone-900 text-black dark:text-white"
            type="text"
            name="username"
            v-model="form_data.name"
          />
        </div>
        <div class="flex flex-wrap m-0 p-0 col-auto">
          <label
            class="w-full text-lg font-bold text-black dark:text-white"
            for="email"
            >Email</label
          >
          <input
            class="h-10 p-2 rounded bg-white dark:bg-stone-900 text-black dark:text-white"
            type="text"
            name="email"
            v-model="form_data.email"
          />
        </div>
      </div>
      <div class="flex justify-center items-center m-5">
        <div class="flex flex-wrap m-0 p-0 col-auto">
          <label
            class="w-full text-lg font-bold text-black dark:text-white"
            for="name"
            >Preferred Contact</label
          >
          <input
            class="h-10 p-2 rounded bg-white dark:bg-stone-900 text-black dark:text-white"
            type="text"
            name="username"
            v-model="form_data.name"
          />
        </div>
        <div class="flex flex-wrap m-0 p-0 col-auto">
          <label
            class="w-full text-lg font-bold text-black dark:text-white"
            for="email"
            >Email</label
          >
          <input
            class="h-10 p-2 rounded bg-white dark:bg-stone-900 text-black dark:text-white"
            type="text"
            name="email"
            v-model="form_data.email"
          />
        </div>
      </div>
    </div>
    <hr />
    <div v-if="form_data.comm_type === 'Post Audio'">
      <h1 class="text-4xl font-bold text-white">POST AUDIO SHOWING</h1>
    </div>
    <div v-else-if="form_data.comm_type === 'Game Audio'">
      <h1 class="text-4xl font-bold text-white">game AUDIO SHOWING</h1>
    </div>
  </div>
</template>
