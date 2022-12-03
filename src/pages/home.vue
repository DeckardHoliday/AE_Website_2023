<script>
import Carousel from "../components/carousel.vue";
import Card from "../components/card.vue";

// import icons for card props
import light_film_svg from "../assets/heroicons/light/film.svg";
import light_mix_svg from "../assets/heroicons/light/adjustments-vertical.svg";
import light_game_svg from "../assets/heroicons/light/computer-desktop.svg";

import dark_film_svg from "../assets/heroicons/dark/film.svg";
import dark_mix_svg from "../assets/heroicons/dark/adjustments-vertical.svg";
import dark_game_svg from "../assets/heroicons/dark/computer-desktop.svg";

import { useDark } from "@vueuse/core";

const isDark = useDark();

let film_svg;
let mix_svg;
let game_svg;

console.log(isDark.value);

if (isDark.value) {
  film_svg = dark_film_svg;
  mix_svg = dark_mix_svg;
  game_svg = dark_game_svg;
} else {
  film_svg = light_film_svg;
  mix_svg = light_mix_svg;
  game_svg = light_game_svg;
}

export default {
  components: {
    Carousel,
    Card,
  },
  data() {
    return {
      film_svg,
      mix_svg,
      game_svg,
    };
  },
};
</script>

<template>
  <section>
    <Carousel />
  </section>
  <section class="flex my-32 container content-center justify-center mx-auto">
    <div class="flex-1 mx-5 flex text-stone-900 dark:text-slate-100">
      <div class="flex-1">
        <h2 class="text-4xl mb-5 ml-12 text-stone-900 dark:text-slate-100">
          Welcome to Audio Elk
        </h2>
        <p class="text-xl px-10 text-stone-900 dark:text-slate-100 ml-1">
          Audio Elk is your one stop shop for all your potential audio needs!
          Whether its custom sound design for a film or animation of yours, some
          music or dialogue mixing for an album or podcast, or some custom sound
          design and audio scripting for your game project, Audio Elk has a
          variety of services to ensure that whatever you need, Audio Elk is
          there!
        </p>
      </div>
      <div class="flex-1"><img src="../assets/logos/AE_Stack_purp.png" /></div>
    </div>
  </section>
  <section class="container grid sm:grid-cols-1 md:grid-cols-3 mx-auto">
    <Card
      class=""
      :icon="film_svg"
      title="Post Production Audio"
      sub_title="Sound for Animation and Film"
      description="Bring your film or animation to life with professional sound design and mixing utilizing professional grade tools, libraries, and recording techniques."
      link_to="services"
    />
    <Card
      class=""
      :icon="mix_svg"
      title="Mixing and Mastering"
      sub_title="For your Music, Podcast, or Audio Drama"
      description="Give your audio project its final polish with professional restoration, editing, and mixing services."
      link_to="services"
    />
    <Card
      class=""
      :icon="game_svg"
      title="Game Audio"
      sub_title="Sound Design and Implementation"
      description="Bring your project to the next level with custom sound design, implementation, and audio systems programming."
      link_to="services"
    />
  </section>
</template>
