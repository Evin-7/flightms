<template>
  <div class="h-screen">
    <!-- Desktop Layout -->
    <div class="hidden md:flex h-full">
      <!-- Sidebar - 20% width -->
      <div class="w-1/5 text-flightmspurple">
        <div
          class="flex flex-wrap flex-row justify-center w-[80%] pt-[20px] items-center space-x-2"
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

      <!-- Main Content - 80% width -->
      <div class="w-4/5 bg-gray-100 flex flex-col">
        <Navbar />
        <div class="p-6 flex-1">
          <router-view />
        </div>
      </div>
    </div>

    <!-- Mobile Layout -->
    <div class="block md:hidden">
      <Navbar />
      <div class="p-6">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import airplaneIcon from "../src/assets/icons/flightPurple.png";

export default {
  components: { Navbar, Sidebar },
  setup() {
    return { airplaneIcon }; // ✅ Correct placement inside setup()
  },
};
</script>
