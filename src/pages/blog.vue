<script>
import ActiveBlog from "../components/blog/activeBlog.vue";
import RecentBlogCard from "../components/blog/recentBlogCard.vue";
import PageTitle from "../components/pagetitle.vue";
import SectionTitle from "../components/sectiontitle.vue";
/*
const res = await fetch(
  `https://www.googleapis.com/blogger/v3/blogs/4667748673448071263/posts?key=${
    import.meta.env.VITE_BLOGGER_API_KEY
  }`
);
const blog_data = await res.json();

const blog_items = blog_data.items;
*/

const blog_data = "";
const blog_items = [];

const latest_blog = blog_items[0];
const recent_posts = blog_items;

console.log(latest_blog);
console.log(recent_posts);

export default {
  components: {
    PageTitle,
    SectionTitle,
    RecentBlogCard,
    ActiveBlog,
  },
  data() {
    return {
      latest_blog,
      recent_posts,
    };
  },
  methods: {
    create_excerpt(string) {
      let max_length = 240;

      let excerpt = string.replace(/(<([^>]+)>)/gi, "");
      excerpt = excerpt.replace("&nbsp;", "");

      excerpt = excerpt.substring(0, max_length);

      excerpt += "...";

      return excerpt;
    },
  },
};
</script>

<template>
  <PageTitle title="Blog" />
  <div class="flex min-h-screen">
    <div class="flex-1 max-w-4xl text-white ml-64 mr-32 p-5">
      <h2
        class="text-left md:text-left lg:text-left mb-2 text-4xl font-extrabold leading-none text-gray-900 md:text-4xl lg:text-4xl dark:text-white"
      >
        {{ latest_blog.title }}
      </h2>
      <h5
        class="text-right md:text-right lg:text-left mb-3 text-xs font-normal leading-none text-gray-900 md:text-4xl lg:text-lg dark:text-white"
      >
        {{ new Date(latest_blog.published).toDateString() }}
      </h5>
      <hr class="mb-5" />
      <active-blog :content="latest_blog.content" />
      <h5
        class="text-right md:text-right lg:text-left mb-8 text-xs font-normal leading-none text-gray-900 md:text-4xl lg:text-lg dark:text-white"
      >
        <a :href="latest_blog.url" target="_blank">View Original Post</a>
      </h5>
    </div>
    <div class="flex-0 text-white">
      <h2
        class="text-left md:text-left lg:text-left mb-2 text-2xl font-extrabold leading-none text-gray-900 md:text-4xl lg:text-2xl dark:text-white"
      >
        Recent Posts
      </h2>
      <hr />
      <ul v-for="item in recent_posts">
        <recent-blog-card
          :key="item.title.split(' ').join('_')"
          :title="item.title"
          :content="create_excerpt(item.content)"
          :date_posted="item.published"
          :url="item.url"
        />
      </ul>
    </div>
  </div>
</template>
