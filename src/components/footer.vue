<script>
import socialBar from "./socialBar.vue";

export default {
  components: {
    socialBar,
  },
};
</script>

<template>
  <footer class="mt-5 p-4 bg-white sm:p-6 dark:bg-stone-900">
    <div
      class="container px-3 mx-auto sm:flex sm:items-center sm:justify-between"
    >
      <span class="text-sm text-gray-500 sm:text-center dark:text-slate-100"
        >© 2022
        <a href="https://audioelk.com/" class="hover:underline">AudioElk</a>.
        All Rights Reserved.
      </span>
      <socialBar text_size="text-lg" />
    </div>
  </footer>
</template>
