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
          <img v-if="!isOpen" :src="menuIcon" alt="Menu Icon" class="w-6 h-6" />
          <img v-else :src="closeIcon" alt="Close Icon" class="w-6 h-6" />
        </button>
      </div>

      <!-- Desktop Links -->
      <div class="hidden md:flex justify-between items-center space-x-4 w-full">
        <span class="font-medium">Dashboard</span>

        <div
          class="flex w-[40%] items-center bg-gray-200 rounded-[25px] px-3 py-2"
        >
          <img
            :src="searchIcon"
            alt="Search Icon"
            class="w-5 h-5 text-gray-500"
          />
          <input
            type="text"
            placeholder="Search..."
            class="w-full bg-gray-200 outline-none pl-2"
          />
        </div>

        <div class="flex items-center space-x-2">
          <div
            class="bg-gray-200 p-2 rounded-full flex items-center justify-center"
          >
            <img :src="bellBlack" alt="Bell Icon" class="w-5 h-5" />
          </div>
          <div class="pl-[20px]">
            <img
              :src="Fernando"
              alt="User Icon"
              class="w-[35px] h-[35px] object-contain"
            />
          </div>

          <div class="flex flex-col leading-tight">
            <span class="font-medium">Fernando J</span>
            <span class="text-sm text-gray-500">Admin</span>
          </div>
          <div class="flex leading-tight pr-[10px]">
            <img
              :src="downBlack"
              alt="Dropdown Icon"
              class="w-[15px] h-[15px] object-contain"
            />
          </div>
        </div>
      </div>

      <!-- Search Bar -->
    </div>

    <!-- Mobile Collapsible Menu -->
    <div
      v-if="isOpen"
      class="md:hidden space-y-4 py-4 border-t border-gray-700"
    >
      <router-link
        v-for="link in links"
        :key="link.path"
        :to="link.path"
        class="flex items-center justify-start space-x-2 py-2 px-4 rounded bg-[#250c39] text-white"
        @click="closeMenu"
      >
        <img
          v-if="link.iconType === 'dynamic'"
          :src="link.activeIcon"
          :alt="`${link.label} Icon`"
          class="w-5 h-5"
        />
        <span>{{ link.label }}</span>
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import airplaneIcon from "../../src/assets/icons/flightPurple.png";
import searchIcon from "../../src/assets/icons/searchViolet.png";
import closeIcon from "../../src/assets/icons/closeViolet.png";
import menuIcon from "../../src/assets/icons/menuViolet.png";
import dashboardWhite from "../../src/assets/icons/dashboardWhite.png";
import dashboardBlack from "../../src/assets/icons/dashboardBlack.png";
import flightWhite from "../../src/assets/icons/flightWhite.png";
import flightBlack from "../../src/assets/icons/flightBlack.png";
import bellBlack from "../../src/assets/icons/bellBlack.png";
import downBlack from "../../src/assets/icons/downBlack.png";

import Fernando from "../../src/assets/images/Fernando.jpg";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMenu = () => {
  isOpen.value = false;
};

const links = [
  {
    path: "/",
    label: "Dashboard",
    iconType: "dynamic",
    activeIcon: dashboardWhite,
    inactiveIcon: dashboardBlack,
  },
  {
    path: "/flights",
    label: "Flights",
    iconType: "dynamic",
    activeIcon: flightWhite,
    inactiveIcon: flightBlack,
  },
];
</script>
