<script>
import ContactForm from "../components/sub_components/ContactForm.vue";
import socialBar from "../components/socialBar.vue";

import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();

// icons light
import cohost_light from "../assets/icons/light/cohost_black.svg";
import furaffinity_light from "../assets/icons/light/furaffinity.svg";
import twitter_light from "../assets/icons/light/twitter_black.svg";
import itaku_light from "../assets/icons/light/itaku.svg";

// icons dark
import cohost_dark from "../assets/icons/dark/cohost_light.svg";
import furaffinity_dark from "../assets/icons/dark/furaffinity_light.svg";
import twitter_dark from "../assets/icons/dark/twitter_light.svg";
import itaku_dark from "../assets/icons/dark/itaku_light.svg";
import PageTitle from "../components/pagetitle.vue";

let cohost_icon;
let furaffinity_icon;
let twitter_icon;
let itaku_icon;

if (isDark.value) {
  cohost_icon = cohost_dark;
  furaffinity_icon = furaffinity_dark;
  twitter_icon = twitter_dark;
  itaku_icon = itaku_dark;
} else {
  cohost_icon = cohost_light;
  furaffinity_icon = furaffinity_light;
  twitter_icon = twitter_light;
  itaku_icon = itaku_light;
}

export default {
  data() {
    return {
      cohost_icon,
      furaffinity_icon,
      twitter_icon,
      itaku_icon,
    };
  },
  components: {
    ContactForm,
    PageTitle,
    socialBar,
  },
};
</script>

<template>
  <section>
    <PageTitle title="Contact" />

    <div id="contact_options" class="flex justify-center mx-64">
      <div id="contact_form" class="flex-1">
        <ContactForm />
      </div>
      <div id="contact_form" class="flex-1">
        <h1
          class="text-center mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white"
        >
          Reach out on Social Media
        </h1>
        <socialBar
          text_size="text-4xl"
          text_color="text-black dark:text-white"
        />
      </div>
    </div>
  </section>
</template>
