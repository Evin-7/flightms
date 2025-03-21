<template>
  <div v-if="isDesktop" class="font-poppins">
    <div class="flex h-full">
      <div class="w-[18%] text-flightmspurple fixed h-full z-10">
        <div
          class="flex flex-wrap flex-row justify-center w-[80%] pb-[10px] pt-[20px] items-center space-x-2"
        >
          <img :src="airplaneIcon" alt="Airplane Icon" class="w-8 h-8" />
          <span
            class="text-2xl pl-[10px] font-bold bg-flightmspurplegradient bg-clip-text text-transparent"
          >
            FLIGHTMS
          </span>
        </div>
        <Sidebar />
      </div>

      <div class="w-full ml-[18%] bg-gray-100 h-[100vh] flex flex-col">
        <Navbar />
        <div class="flex-1 overflow-y-auto pt-[80px]">
          <router-view />
        </div>
      </div>
    </div>
  </div>
  <div v-else class="z-20 font-poppins">
    <Navbar />
    <div class="overflow-y-auto bg-gray-100 h-[calc(100vh-60px)] pt-[60px]">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import airplaneIcon from "../src/assets/icons/flightPurple.png";
import { ref, onMounted, onUnmounted } from "vue";

export default {
  components: { Navbar, Sidebar },
  setup() {
    const isDesktop = ref(window.innerWidth >= 768); // md breakpoint

    const handleResize = () => {
      isDesktop.value = window.innerWidth >= 768;
    };

    onMounted(() => {
      window.addEventListener("resize", handleResize);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    });

    return { airplaneIcon, isDesktop };
  },
};
</script>
