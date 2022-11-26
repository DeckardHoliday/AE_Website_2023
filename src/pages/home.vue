<script>
import Carousel from "../components/carousel.vue";
import Card from "../components/card.vue";

export default {
  components: {
    Carousel,
    Card,
  },
};
</script>

<template>
  <Carousel />
  <div class="flex content-center justify-center mx-auto px-3 mt-5 grid-cols-3">
    <Card class="flex-1" />
    <Card class="flex-1" />
    <Card class="flex-1" />
  </div>
</template>
