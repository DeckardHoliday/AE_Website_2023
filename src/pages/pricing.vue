<script>
import PriceCard from "../components/priceCard.vue";

import { post_services } from "../assets/services";

export default {
  data() {
    return {
      post_services,
    };
  },
  components: {
    PriceCard,
  },
};
</script>

<template>
  <section v-if="post_services">
    <h4 class="text-white">Pricing</h4>
    <div :v-for="item in post_services">
      <PriceCard
        :title="item.title"
        :price="item.price"
        :per="item.per"
        :features="item.features"
      />
    </div>
  </section>
</template>
