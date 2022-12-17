<script>
export default {
  props: {
    title: String,
    description: String,
  },
};
</script>

<template>
  <div class="my-16">
    <h1
      class="text-center mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white"
    >
      {{ title }}
    </h1>

    <div :v-if="description">
      <p
        class="mx-5 md:mx-64 my-16 text-lg md:text-xl lg:text-2xl font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
      >
        &emsp;&emsp;
        {{ description }}
      </p>
    </div>
  </div>
</template>
