<template>
  <div class="h-screen font-poppins">
    <div class="hidden md:flex h-full">
      <div class="w-[18%] text-flightmspurple fixed h-full">
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

      <div class="w-full ml-[18%] bg-gray-100 flex flex-col">
        <Navbar />
        <div class="flex-1 overflow-y-auto pt-[80px]">
          <router-view />
        </div>
      </div>
    </div>

    <div class="block md:hidden">
      <Navbar />
      <div class="p-6 overflow-y-auto h-[calc(100vh-60px)] pt-[60px]">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import airplaneIcon from "../src/assets/icons/flightPurple.png";
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  components: { Navbar, Sidebar },
  setup() {
    return { airplaneIcon };
  },
};
</script>
