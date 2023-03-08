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
  <PageTitle title="Portfolio" />
  <SectionTitle title="Sound Libraries" />
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
    />
  </div>
  <SectionTitle title="Development Tools" />
</template>
