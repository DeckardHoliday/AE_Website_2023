<script>
import PageTitle from "../components/pagetitle.vue";
import SectionTitle from "../components/sectiontitle.vue";
import ProductCard from "../components/productCard.vue";

import { itchio_data } from "../assets/products";

const products = itchio_data.games;

console.log(products);

/*

*/

export default {
  components: {
    PageTitle,
    SectionTitle,
    ProductCard,
  },
  data() {
    return {
      products,
    };
  },
};
</script>

<template>
  <PageTitle title="Store" />
  <SectionTitle title="Sound Libraries" />
  <section class="flex w-8/12 mx-auto flex-wrap justify-center items-center">
    <div v-for="product in products">
      <ProductCard
        :key="`product_item_${products.indexOf(product)}`"
        :img="product.cover_url"
        :title="product.title"
        :tagline="product.short_text"
        :sale="product.sale ? product.sale : undefined"
        :date_published="product.published_at"
        :url="product.url"
        :price="product.min_price"
        :sale_price="parseInt(product.price * (product.sale.rate / 100))"
      />
    </div>
  </section>
</template>
