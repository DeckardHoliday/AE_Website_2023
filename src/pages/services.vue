<script setup>
import { onMounted } from "vue";
import { initModals } from "flowbite";

onMounted(() => {
  initModals();
});
</script>

<script>
import PriceCard from "../components/priceCard.vue";
import SectionTitle from "../components/sectiontitle.vue";
import PageTitle from "../components/pagetitle.vue";

//modals
import PostAudioModal from "../components/modals/postaudiomodal.vue";

import {
  post_services,
  editing_services,
  music_services,
} from "../assets/services";

export default {
  data() {
    return {
      post_items: post_services,
      editing_items: editing_services,
      music_items: music_services,
    };
  },
  components: {
    PriceCard,
    SectionTitle,
    PageTitle,
    PostAudioModal,
  },
};
</script>

<template>
  <section>
    <PageTitle title="Pricing" />

    <div class="text-white text-xl">
      <div id="post-audio" class="my-24">
        <SectionTitle
          title="Post Production Audio"
          description="Probably what I'm most known for! Whether you need foley work for a film project or a full sound design pass on your animation, I wll work with you to bring any video project you have to life!"
        />

        <ul class="flex justify-center align-center flex-wrap">
          <li
            class="flex mx-8"
            v-for="service in post_items"
            :key="'post_' + post_items.indexOf(service)"
          >
            <PriceCard
              :title="service.title"
              :price="service.price"
              :per="service.per"
              :modaltoopen="service.modaltoopen"
              :features="service.features"
            />
          </li>
        </ul>
      </div>

      <div id="audio-editing" class="my-24">
        <SectionTitle
          title="Dialogue Editing and Restoration"
          description="Have a recording you need cleaned up? Need your narration or podcast recordings to flow better? I provide spectral repair services along with dialogue editing services that will clean up noise in your recording and fix the pacing of your dialogue!"
        />
        <!-- -->
        <ul class="flex justify-center align-center flex-wrap">
          <li
            class="flex mx-8"
            v-for="service in editing_items"
            :key="'editing_' + post_items.indexOf(service)"
          >
            <PriceCard
              :title="service.title"
              :price="service.price"
              :per="service.per"
              :modaltoopen="service.modaltoopen"
              :features="service.features"
            />
          </li>
        </ul>
      </div>

      <div id="music-editing" class="my-24">
        <SectionTitle
          title="Music Mixing and Mastering"
          description="In addition to my Post Audio services, I also offer music mixing and mastering services! If you have a track or album that needs mixing feel free to reach out!"
        />
        <ul class="flex justify-center align-center flex-wrap">
          <li
            class="flex mx-8"
            v-for="service in music_items"
            :key="'music_' + post_items.indexOf(service)"
          >
            <PriceCard
              :title="service.title"
              :price="service.price"
              :per="service.per"
              :modaltoopen="service.modaltoopen"
              :features="service.features"
            />
          </li>
        </ul>
      </div>
      <div id="game-audio">
        <SectionTitle
          title="Game Audio"
          description="From custom sound design to full audio playback implementation, I provide a wide variety of services across multiple tech stacks including RenPy, Unreal Engine, and Unity!"
        />
      </div>
    </div>
  </section>

  <PostAudioModal />
</template>
