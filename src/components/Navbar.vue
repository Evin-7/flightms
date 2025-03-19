<template>
  <nav class="bg-white shadow-md text-flightmspurple px-4 py-3">
    <div class="flex justify-between items-center">
      <!-- Logo and Branding -->
      <div class="md:hidden">
        <div class="flex items-center space-x-2">
          <img :src="airplaneIcon" alt="Airplane Icon" class="w-8 h-8" />
          <span
            class="text-2xl font-bold bg-flightmspurplegradient bg-clip-text text-transparent"
          >
            FLIGHTMS
          </span>
          <span class="text-2xl text-black font-bold">FLIGHTS</span>
        </div>
      </div>

      <!-- Hamburger Menu (Mobile) -->
      <div class="md:hidden">
        <button
          @click="toggleMenu"
          class="text-flightmspurple focus:outline-none"
        >
          <svg
            v-if="!isOpen"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Desktop Links -->
      <div class="hidden md:flex space-x-6">
        <router-link to="/" class="hover:text-gray-400">🏠 Home</router-link>
        <router-link to="/flights" class="hover:text-gray-400"
          >ℹ️ About</router-link
        >
      </div>
    </div>

    <!-- Mobile Collapsible Menu -->
    <div
      v-if="isOpen"
      class="md:hidden space-y-4 py-4 border-t border-gray-700"
    >
      <router-link to="/" class="block text-center py-2" @click="closeMenu"
        >🏠 Home</router-link
      >
      <router-link to="/flights" class="block text-center py-2" @click="closeMenu"
        >ℹ️ About</router-link
      >
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";
import airplaneIcon from "../../src/assets/icons/flightPurple.png";

export default {
  setup() {
    const isOpen = ref(false);

    const toggleMenu = () => {
      isOpen.value = !isOpen.value;
    };

    const closeMenu = () => {
      isOpen.value = false;
    };

    return { isOpen, toggleMenu, closeMenu, airplaneIcon };
  },
};
</script>
