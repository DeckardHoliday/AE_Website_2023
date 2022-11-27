<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>

<template>
  <div id="default-carousel" class="container mx-auto px-2">
    <carousel
      :items-to-show="1"
      :loop="true"
      :wrap-around="true"
      :autoplay="8000"
      :transition="1000"
    >
      <slide :key="slide">
        <img src="../assets/placeholder_carousel_1.png" />
      </slide>
      <slide :key="slide">
        <img src="../assets/placeholder_carousel_2.png" />
      </slide>
      <slide :key="slide">
        <img src="../assets/placeholder_carousel_3.png" />
      </slide>

      <template #addons>
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<style scoped>
#default-carousel {
  height: 75vh;
}
</style>
