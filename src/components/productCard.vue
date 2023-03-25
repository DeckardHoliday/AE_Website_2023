<script>
import { TheCard } from "flowbite-vue";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default {
  props: {
    img: String,
    title: String,
    tagline: String,
    sale:
      {
        id: Number,
        rate: Number,
        start_date: Date,
        end_date: Date,
      } | undefined,
    date_published: String,
    url: String,
    price: Number,
    sale_price: Number,
  },
  components: {
    TheCard,
  },
  data() {
    return {
      formatter,
    };
  },
};
</script>

<template>
  <div
    class="m-5 w-72 custom-height border border-black dark:border-white p-2 rounded flex flex-wrap"
  >
    <div class="min-w-fit">
      <img :src="img" alt="product-box" />
    </div>
    <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
      {{ title }}
    </h5>
    <div class="flex items-baseline text-gray-900 dark:text-white">
      <div v-if="sale">
        <span class="text-5xl font-extrabold tracking-tight line-through">
          {{ formatter.format(price / 100) }}
        </span>
        <span
          class="ml-3 text-3xl font-bold text-red-700 tracking-tight cursor-pointer"
          :title="`This product is currently ${sale.rate}% off until ${sale.end_date}`"
        >
          {{ formatter.format((price * ((100 - sale.rate) / 100)) / 100) }}!
        </span>
      </div>
      <div v-else>
        <span class="text-5xl font-extrabold tracking-tight">
          {{ formatter.format(price / 100) }}
        </span>
      </div>
    </div>
    <div></div>
    <button
      type="button"
      class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center items-center w-full text-center dark:bg-black"
    >
      Submit Request
    </button>
  </div>
</template>

<style scoped>
.custom-height {
  height: 25rem;
}
</style>
