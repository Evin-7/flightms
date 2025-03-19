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
          <span class="text-sm text-black font-bold">FLIGHTS</span>
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
import bellBlack from "../../src/assets/icons/bellBlack.png";
import downBlack from "../../src/assets/icons/downBlack.png";

import Fernando from "../../src/assets/images/Fernando.jpg";

import dashboardWhite from "../assets/icons/dashboardWhite.png";
import dashboardBlack from "../assets/icons/dashboardBlack.png";
import flightWhite from "../assets/icons/flightWhite.png";
import flightBlack from "../assets/icons/flightBlack.png";
import bookingWhite from "../assets/icons/bookingWhite.png";
import bookingBlack from "../assets/icons/bookingBlack.png";
import staffWhite from "../assets/icons/staffWhite.png";
import staffBlack from "../assets/icons/staffBlack.png";
import helpDeskWhite from "../assets/icons/helpDeskWhite.png";
import helpDeskBlack from "../assets/icons/helpDeskBlack.png";
import settingsWhite from "../assets/icons/settingsWhite.png";
import settingsBlack from "../assets/icons/settingsBlack.png";
import barChartWhite from "../assets/icons/barChartWhite.png";
import megaPhoneWhite from "../assets/icons/megaPhoneWhite.png";
import megaPhoneBlack from "../assets/icons/megaPhoneBlack.png";
import dollarWhite from "../assets/icons/dollarWhite.png";
import dollarBlack from "../assets/icons/dollarBlack.png";

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
  {
    path: "/bookings",
    label: "Bookings",
    iconType: "dynamic",
    activeIcon: bookingWhite,
    inactiveIcon: bookingBlack,
  },
  {
    path: "/staffs",
    label: "Staffs",
    iconType: "dynamic",
    activeIcon: staffWhite,
    inactiveIcon: staffBlack,
  },
  {
    path: "/helpdesk",
    label: "Helpdesk",
    iconType: "dynamic",
    activeIcon: helpDeskWhite,
    inactiveIcon: helpDeskBlack,
  },
  {
    path: "/manage-aircrafts",
    label: "Manage Aircrafts",
    iconType: "dynamic",
    activeIcon: settingsWhite,
    inactiveIcon: settingsBlack,
  },
  {
    path: "/reports-analytics",
    label: "Reports & Analytics",
    iconType: "dynamic",
    activeIcon: barChartWhite,
    inactiveIcon: barChartBlack,
  },
  {
    path: "/broadcast-notifications",
    label: "Broadcast Notifications",
    iconType: "dynamic",
    activeIcon: megaPhoneWhite,
    inactiveIcon: megaPhoneBlack,
  },
  {
    path: "/payment-refunds",
    label: "Payment Refunds",
    iconType: "dynamic",
    activeIcon: dollarWhite,
    inactiveIcon: dollarBlack,
  },
];
</script>
