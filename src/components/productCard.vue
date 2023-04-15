<script>
import { TheCard } from "flowbite-vue";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default {
  props: {
    product: Object,
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
    class="m-5 w-72 bg-gray-100 dark:bg-stone-800 rounded flex flex-wrap rounded-xl"
  >
    <div class="min-w-fit">
      <img class="rounded-t-xl" :src="product.cover_url" alt="product-box" />
    </div>
    <h5 class="mb-2 px-2 text-xl font-bold text-gray-500 dark:text-white">
      {{ product.title }}
    </h5>
    <div
      class="flex w-full mb-2 px-2 items-baseline text-gray-900 dark:text-white"
    >
      <div v-if="product.sale">
        <span class="text-5xl font-extrabold tracking-tight line-through">
          {{ formatter.format(product.min_price / 100) }}
        </span>
        <span
          class="ml-3 text-2xl font-bold tracking-tight cursor-pointer sale_text"
          :title="`This product is currently ${product.sale.rate}% off until ${product.sale.end_date}`"
        >
          {{
            formatter.format(
              (product.min_price * ((100 - product.sale.rate) / 100)) / 100
            )
          }}!
        </span>
      </div>
      <div v-else>
        <span class="text-4xl font-extrabold tracking-tight">
          {{ formatter.format(product.min_price / 100) }}
        </span>
      </div>
    </div>
    <div class="w-full px-2 text-md text-black dark:text-white">
      {{ product.short_text }}
    </div>
    <a
      :href="url"
      target="_blank"
      type="button"
      class="dark:bg-purple-800 mx-auto my-2 px-5 py-2 rounded-3xl dark:text-white font-bold"
    >
      View on Itch.io
    </a>
  </div>
</template>

<style scoped>
.sale_text {
  color: #ff0000;
}
</style>
