<script>
import { Input } from "flowbite-vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFilm,
  faWandMagicSparkles,
  faMusic,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default {
  components: {
    FontAwesomeIcon,
    Input,
  },
  data() {
    return {
      faUser,
      comm_type: "post",
      form_data: {
        comm_type: "post",
        project_name: "",
      },
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
      <label class="text-black dark:text-white font-bold" for="comm_type"
        >Commission Type:
      </label>
      <select name="comm_type" class="w-48" :required="true">
        <option :selected="true" value="post">Post Audio</option>
        <option value="game">Game Audio</option>
      </select>
      <div class="grid columns-2 gap-4">
        <Input
          class="my-2 p-1 text-xl text-black dark:text-white"
          placeholder="Username"
        />
        <Input class="my-2 p-1 text-xl" placeholder="Username" />
      </div>
    </div>
    <hr />
    <div v-if="comm_type === 'post'">
      <h1 class="text-4xl font-bold text-white">POST AUDIO SHOWING</h1>
    </div>
    <div v-if="comm_type === 'game'">
      <h1 class="text-4xl font-bold text-white">game AUDIO SHOWING</h1>
    </div>
  </div>
</template>
