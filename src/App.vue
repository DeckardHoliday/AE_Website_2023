<script>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";

import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <div class="bg-slate-100 dark:bg-slate-900 min-h-screen">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>
