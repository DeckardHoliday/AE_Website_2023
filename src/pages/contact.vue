<script>
import ContactForm from "../components/sub_components/ContactForm.vue";

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
  },
};
</script>

<template>
  <section>
    <div id="contact_title" class="my-16">
      <h1
        class="text-center mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white"
      >
        Contact
      </h1>
      <p
        class="mx-64 mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
      >
        Praesent sodales eros nibh, interdum tempor nibh accumsan ac. Vestibulum
        nec purus nisl. Vestibulum at ultricies nisl. Vivamus vel odio justo.
        Aliquam cursus convallis odio, ut egestas urna. Sed ornare sollicitudin
        mauris in interdum.
      </p>
    </div>

    <div id="contact_options" class="flex justify-center mx-48">
      <div id="contact_form" class="flex-1">
        <ContactForm />
      </div>
      <div id="contact_form" class="flex-1">
        <h1
          class="text-center mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white"
        >
          Reach out on Social Media
        </h1>
        <div class="flex justify-center mx-auto text-center">
          <a class="flex-0 m-3" href="#">
            <img :src="cohost_icon" />
          </a>
          <a class="flex-0 m-3" href="#"> <img src="{{cohost_icon}}" /> </a>
          <a class="flex-0 m-3" href="#"> <img src="{{cohost_icon}}" /> </a>
          <a class="flex-0 m-3" href="#"> <img src="{{cohost_icon}}" /> </a>
          <a class="flex-0 m-3" href="#"> <img src="cohost{{_icon" /> </a>
        </div>
      </div>
    </div>
  </section>
</template>
