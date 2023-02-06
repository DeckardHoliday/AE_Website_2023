<script>
import PageTitle from "../components/pagetitle.vue";
import SectionTitle from "../components/sectiontitle.vue";

import { about_me_txt_group, tools_of_the_trade } from "../assets/site_text";
import deckard from "../assets/deckard_pics/Icon_gajardopaper.png";

export default {
  components: {
    PageTitle,
    SectionTitle,
  },
  data() {
    return {
      about_me_txt_group,
      tools_of_the_trade,
      deckard,
    };
  },
};
</script>

<template>
  <PageTitle title="About" />
  <section
    class="container mx-auto px-3 my-32 text-stone-900 dark:text-slate-100"
  >
    <SectionTitle title="What is Audio Elk?" />
    <div class="grid sm:grid-cols-1 lg:grid-cols-2 lg:grid-cols-2 gap-4">
      <div id="about_me_text" class="p-2 my-auto">
        <div v-for="item in about_me_txt_group">
          <p
            class="my-5 px-5 text-black dark:text-white text-xl"
            :key="p_text_ + about_me_txt_group.indexOf(item)"
          >
            &emsp;&emsp;{{ item }}
          </p>
        </div>
      </div>
      <div id="profile_image">
        <img class="m-auto" :src="deckard" />
      </div>
    </div>
    <SectionTitle title="Tools of the Trade" />
    <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
      <div class="px-5" v-for="item in tools_of_the_trade">
        <h2
          class="text-left px-16 mb-4 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-2xl lg:text-3xl dark:text-white"
        >
          {{ item.title }}
        </h2>
        <hr class="text-black dark:text-white mt-5" />
        <div class="p-5 px-16" v-for="li_item in item.items">
          <h3
            class="my-1 text-left mb-4 text-md font-extrabold tracking-tight leading-none text-gray-900 md:text-lg lg:text-2xl dark:text-white"
            v-if="li_item.title"
          >
            {{ li_item.title }}
          </h3>
          <ul class="my-5" v-for="value in li_item.items">
            <li class="my-2">
              <p>
                <span class="font-bold" v-if="value.title"
                  >{{ value.title }} :</span
                >
                {{ value.value ? value.value : value }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
