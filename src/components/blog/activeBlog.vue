<script>
export default {
  props: {
    content: String,
  },
  methods: {
    apply_classes(string) {
      let new_html = string.replaceAll(
        '<h3 style="text-align: left;">',
        '<h3 class="text-left md:text-left lg:text-left my-2 text-4xl font-extrabold leading-none text-gray-900 md:text-4xl lg:text-3xl dark:text-white">'
      );

      new_html = new_html.replaceAll(
        "<p>",
        '<p class="text-left md:text-left lg:text-left text-lg font-regular leading-none text-gray-900 md:text-lg lg:text-lg dark:text-white"> &emsp;&emsp;'
      );

      new_html = new_html.replaceAll("<img ", '<img class="mx-auto my-0" ');

      return new_html;
    },
  },
};
</script>

<template>
  <div v-html="apply_classes(content)"></div>
</template>

<style scoped></style>
