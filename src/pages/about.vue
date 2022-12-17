<script>
import PageTitle from "../components/pagetitle.vue";
import SectionTitle from "../components/sectiontitle.vue";

export default {
  components: {
    PageTitle,
    SectionTitle,
  },
};
</script>

<template>
  <PageTitle title="About" />
  <section
    class="container mx-auto px-3 my-32 text-stone-900 dark:text-slate-100"
  >
    <SectionTitle title="What is Audio Elk?" />
    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      <div id="text p-5">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor,
          elit quis tristique sodales, felis elit interdum dolor, ut maximus
          ipsum arcu at tortor. Phasellus fermentum augue mi, pharetra auctor
          mauris ultrices non. Duis viverra accumsan tortor vel bibendum. Mauris
          eu nisl luctus, malesuada ex interdum, ultricies felis. Nulla leo leo,
          accumsan non nibh at, malesuada dictum mi. Maecenas nisi libero,
          tristique et eleifend eu, suscipit eget enim. Ut sed augue lacinia,
          blandit dolor sed, faucibus lectus. Nunc venenatis sollicitudin ex nec
          tempor. Integer sollicitudin velit sed lectus facilisis fringilla.
        </p>
        <br />
      </div>
      <div id="profile_image">
        <img src="../assets/placeholder_carousel_3.png" />
      </div>
    </div>
  </section>
</template>
