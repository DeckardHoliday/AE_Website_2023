<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      faClose,
    };
  },
};
</script>

<template>
  <!-- Main modal -->
  <div
    id="post-audio-modal"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
  >
    <div class="relative w-full h-full max-w-2xl md:h-auto">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Audio Elk Commission Form
          </h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="post-audio-modal"
          >
            <FontAwesomeIcon :icon="faClose" size="xl" />
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-6 space-y-6">
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-200">
            <b>IMPORTANT READ FIRST:</b> This form is to be used if you wish to
            commission me for <b>AUDIO</b> related work.
            <b
              >I DO NOT ANIMATE AND DO NOT ACCEPT COMMISSION REQUESTS TO CREATE
              ANY ANIMATIONS. I ONLY OFFER AUDIO RELATED SERVICES.</b
            >
          </p>
          <hr />
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-200">
            Please be sure to read my
            <a
              href="https://docs.google.com/document/d/1Qnp9gcymLHt3evYffWZYabZvxaGHCZalijfcOQXYh7E/edit?usp=sharing"
              target="_blank"
              class="text-white underline"
              >terms and conditions</a
            >
            before submitting a form, as you are required to agree to them
            before moving forward! If you have any questions regarding my ToS
            please feel free to message me and I will be glad to answer them.
          </p>
        </div>
        <!-- Modal footer -->
        <div
          class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
        >
          <button
            data-modal-hide="staticModal"
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            I accept
          </button>
          <button
            data-modal-hide="staticModal"
            type="button"
            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
