<script>
export default {
  props: {
    title: String,
    date_posted: Date,
    content: String,
    url: String,
  },
};
</script>

<template>
  <div
    class="my-5 p-3 w-80 rounded dark:bg-black dark:border-white dark:border"
  >
    <a :href="url" target="_blank">
      <h2
        class="text-left md:text-left lg:text-left mb-1 text-lg font-extrabold leading-none text-gray-900 md:text-4xl lg:text-xl dark:text-white"
      >
        {{ title }}
      </h2>
      <h5
        class="text-right md:text-right lg:text-left text-xs mb-1 font-normal leading-none text-gray-900 md:text-4xl lg:text-lg dark:text-white"
      >
        {{ new Date(date_posted).toDateString() }}
      </h5>
      <hr class="mb-3" />
      <p class="mb-5">{{ content }}</p>
      <a :href="url" target="_blank" class="text-lg text-right"
        ><p>Read More...</p></a
      >
    </a>
  </div>
</template>
