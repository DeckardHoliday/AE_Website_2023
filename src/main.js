import { createApp } from "vue";
import App from "./app.vue";
import * as VueRouter from "vue-router";

// add css
import "./style.css";

// import pages
import HomePage from "./pages/home.vue";
import BlogPage from "./pages/blog.vue";
import AboutPage from "./pages/about.vue";
import StorePage from "./pages/store.vue";
import PortfolioPage from "./pages/portfolio.vue";
import ServicesPage from "./pages/services.vue";
import ContactPage from "./pages/contact.vue";

// routes
const routes = [
  { path: "/", component: HomePage },
  { path: "/blog", component: BlogPage },
  { path: "/about", component: AboutPage },
  { path: "/store", component: StorePage },
  { path: "/portfolio", component: PortfolioPage },
  { path: "/services", component: ServicesPage },
  { path: "/contact", component: ContactPage },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");
