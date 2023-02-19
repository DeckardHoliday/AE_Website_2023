<script>
import PageTitle from "../components/pagetitle.vue";
import SectionTitle from "../components/sectiontitle.vue";

/*
const itchio_data = await fetch(
  `https://www.itch.io/api/1/${import.meta.env.VITE_ITCHIO_KEY}/me`
);
*/

export default {
  components: {
    PageTitle,
    SectionTitle,
  },
};
</script>

<template>
  <PageTitle title="Portfolio" />
  <SectionTitle title="Sound Libraries" />
  <SectionTitle title="Development Tools" />
</template>
