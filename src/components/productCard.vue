<script>
export default {
  props: {
    img: String,
    title: String,
    tagline: String,
    sale:
      {
        id: Number,
        rate: Number,
        start_date: String,
        end_date: String,
      } | undefined,
    date_published: String,
    url: String,
    price: Number,
  },
  components: {},
  data() {
    return {};
  },
};
</script>

<template>
  <div
    class="w-full max-w-sm p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-black dark:border-black"
  >
    <div class="">
      <img :src="img" alt="product-box" />
    </div>
    <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
      {{ title }}
    </h5>
    <div class="flex items-baseline text-gray-900 dark:text-white">
      <span class="text-3xl font-semibold">$</span>
      <span class="text-5xl font-extrabold tracking-tight"
        >{{ (price / 100).toPrecision(3) }}
      </span>
    </div>
    <div></div>
    <button
      type="button"
      class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center dark:bg-black"
    >
      Submit Request
    </button>
  </div>
</template>
