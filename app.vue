<script setup>
const colorMode = useColorMode();

definePageMeta({ colorMode: "light" });
</script>

<template>
  <div class="bg-slate-100 dark:bg-stone-900 min-h-screen">
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>
