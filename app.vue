<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div class="bg-slate-100 dark:bg-stone-900 min-h-screen">
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>
