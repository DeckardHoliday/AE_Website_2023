<script>
export default {
  props: {
    title: String,
  },
};
</script>

<template>
  <div class="my-5 lg:mx-64 lg:my-16">
    <h1
      class="text-center md:text-left lg:text-left mb-8 text-5xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-7xl dark:text-white"
    >
      {{ title }}
    </h1>
    <hr class="mx-16 lg:mx-0 lg:w-[350px]" />
  </div>
</template>
