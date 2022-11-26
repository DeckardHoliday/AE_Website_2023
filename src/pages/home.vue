<script>
import Carousel from "../components/carousel.vue";
import Card from "../components/card.vue";

// import icons for card props
import film_svg from "../assets/heroicons/24/solid/film.svg";

export default {
  components: {
    Carousel,
    Card,
  },
  data() {
    return {
      film_svg,
    };
  },
};
</script>

<template>
  <Carousel />
  <section class="flex container content-center justify-center mx-auto">
    <div class="flex-1 text-center">
      <h1 class="text-3xl font-bold text-stone-900 dark:text-slate-100">
        Welcome to AudioElk
      </h1>
      <h4 class="text-xl text-stone-900 dark:text-slate-100">
        The audio destination for furry media.
      </h4>
    </div>
  </section>
  <div class="flex content-center justify-center mx-auto px-3 mt-5 grid-cols-3">
    <Card
      class="flex-1"
      :icon="film_svg"
      title="Post Production Audio"
      sub_title="Sound for Animation and Film"
      description="Bring your film or animation to life with professional sound design and mixing utilizing professional grade tools, libraries, and recording techniques."
      link_to="services"
    />
    <Card
      class="flex-1"
      :icon="film_svg"
      title="Post Production Audio"
      sub_title="Sound for Animation and Film"
      description="Bring your film or animation to life with professional sound design and mixing utilizing professional grade tools, libraries, and recording techniques."
      link_to="services"
    />
    <Card
      class="flex-1"
      :icon="film_svg"
      title="Post Production Audio"
      sub_title="Sound for Animation and Film"
      description="Bring your film or animation to life with professional sound design and mixing utilizing professional grade tools, libraries, and recording techniques."
      link_to="services"
    />
  </div>
</template>
