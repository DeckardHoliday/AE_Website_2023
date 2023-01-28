<script>
import PageTitle from "../components/pagetitle.vue";
import SectionTitle from "../components/sectiontitle.vue";

console.log(import.meta.env.VITE_BLOGGER_API_KEY);

const res = await fetch(
  `https://www.googleapis.com/blogger/v3/blogs/4667748673448071263/posts?key=${
    import.meta.env.VITE_BLOGGER_API_KEY
  }`
);

const blog_data = await res.json();

const blog_items = blog_data.items;

console.log(blog_items);

export default {
  components: {
    PageTitle,
    SectionTitle,
  },
  data() {
    return {
      blog_items,
    };
  },
};
</script>

<template>
  <PageTitle title="Blog" />
  <div class="flex min-h-screen">
    <div class="flex-1 max-w-5xl text-white ml-64 mr-16">
      <h2
        class="text-left md:text-left lg:text-left mb-2 text-4xl font-extrabold leading-none text-gray-900 md:text-4xl lg:text-4xl dark:text-white"
      >
        {{ blog_items[0].title }}
      </h2>
      <h5
        class="text-right md:text-right lg:text-left mb-8 text-xs font-normal leading-none text-gray-900 md:text-4xl lg:text-lg dark:text-white"
      >
        {{ new Date(blog_items[0].published).toDateString() }}
      </h5>
      <hr />
      {{ blog_items[0].content }}
    </div>
    <div class="flex-0 text-white">
      <h2
        class="text-left md:text-left lg:text-left mb-2 text-2xl font-extrabold leading-none text-gray-900 md:text-4xl lg:text-2xl dark:text-white"
      >
        Recent Posts
      </h2>
      <hr />
    </div>
  </div>
</template>
