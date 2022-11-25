export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@vueuse/nuxt"],
  colorMode: {
    preference: "light", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "dark:",
    classSuffix: "-mode",
    storageKey: "nuxt-color-mode",
  },
  plugins: [{ src: "~/plugins/utils.client.js", ssr: false }],
});
