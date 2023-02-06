<script>
import { useColorMode } from "@vueuse/core";
import { Navbar, NavbarLogo, NavbarCollapse } from "flowbite-vue";

import purple_logo from "../../assets/logos/Audio_Elk_2022_Final_Purple.png";
import white_logo from "../../assets/logos/Audio_Elk_2022_Final_White.png";

import { useRoute } from "vue-router";

var colorMode = String(useColorMode()._value);

let img_src = purple_logo;

if (colorMode === "dark") {
  img_src = white_logo;
}

export default {
  computed: {
    route: () => useRoute(),
  },
  components: {
    Navbar,
    NavbarLogo,
    NavbarCollapse,
  },
  methods: {
    get_classes(route_match, isMobile = false) {
      const route = useRoute();

      if (route.path === route_match) {
        return `block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 dark:text-white ${
          isMobile ? "mobile_active" : ""
        }`;
      } else {
        return "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";
      }
    },
  },
  data() {
    return {
      img_src,
    };
  },
};
</script>

<template>
  <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-black w-full z-20">
    <div
      class="invisible md:visible container flex flex-wrap items-center justify-center mx-auto"
    >
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-black dark:border-gray-700"
        >
          <li>
            <router-link to="/" :class="get_classes('/')" aria-current="page"
              >Home</router-link
            >
          </li>
          <li>
            <router-link to="/about" :class="get_classes('/about')"
              >About</router-link
            >
          </li>
          <li>
            <router-link to="/blog" :class="get_classes('/blog')"
              >Blog</router-link
            >
          </li>
        </ul>
      </div>
      <router-link to="/" class="flex md:order-1 items-center">
        <img :src="img_src" class="h-32" alt="Flowbite Logo" />
      </router-link>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-black md:dark:bg-black dark:border-gray-700"
        >
          <li>
            <router-link to="/portfolio" :class="get_classes('/portfolio')"
              >Portfolio</router-link
            >
          </li>
          <li>
            <router-link to="/services" :class="get_classes('/services')"
              >Services</router-link
            >
          </li>
          <li>
            <router-link to="/contact" :class="get_classes('/contact')"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="sm:visible md:invisible md:hidden">
      <Navbar class="bg-white text-black dark:bg-black dark:text-white">
        <template #default="{ isShowMenu }">
          <router-link to="/" class="absolute top-5 left-36">
            <img :src="img_src" class="h-32" alt="Flowbite Logo" />
          </router-link>
          <NavbarCollapse
            :isShowMenu="isShowMenu"
            id="mobile"
            class="text-center"
          >
            <li>
              <router-link
                to="/"
                :class="get_classes('/', true)"
                aria-current="page"
                >Home</router-link
              >
            </li>
            <li>
              <router-link to="/about" :class="get_classes('/about', true)"
                >About</router-link
              >
            </li>
            <li>
              <router-link to="/blog" :class="get_classes('/blog', true)"
                >Blog</router-link
              >
            </li>
            <li>
              <router-link to="/shop" :class="get_classes('/shop', true)"
                >Shop</router-link
              >
            </li>
            <li>
              <router-link
                to="/portfolio"
                :class="get_classes('/portfolio', true)"
                >Portfolio</router-link
              >
            </li>
            <li>
              <router-link
                to="/services"
                :class="get_classes('/services', true)"
                >Services</router-link
              >
            </li>
            <li>
              <router-link to="/contact" :class="get_classes('/contact', true)"
                >Contact</router-link
              >
            </li>
          </NavbarCollapse>
        </template>
      </Navbar>
    </div>
  </nav>
</template>
