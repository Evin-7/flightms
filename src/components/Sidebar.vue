<template>
  <div class="h-full p-1 lg:p-5">
    <ul class="space-y-1">
      <li v-for="link in links" :key="link.path">
        <router-link
          :to="link.path"
          class="flex items-center space-x-4 lg:px-[20px] px-[8px] rounded-[12px] transition lg:py-3 py-1"
          :class="{ 'bg-[#250c39] text-white': $route.path === link.path }"
        >
          <img
            v-if="link.iconType === 'dynamic'"
            :src="
              $route.path === link.path ? link.activeIcon : link.inactiveIcon
            "
            :alt="`${link.label} Icon`"
            class="w-5 h-5"
          />
          <span
            class="text-[12px]"
            :class="{ 'text-flightmsdarkpurple': $route.path !== link.path }"
          >
            {{ link.label }}
          </span>
        </router-link>
      </li>
    </ul>
    <div class="flex absolute bottom-0 left-0 right-0 justify-center mb-4">
      <div class="bg-gray-200 rounded-[25px] p-2 flex items-center space-x-2">
        <img :src="headPhonesBlack" class="h-5 w-5" alt="Headphones Icon" />
        <span class="text-[12px] text-flightmsdarkpurple">Contact Support</span>
      </div>
    </div>
  </div>
</template>

<script setup>
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
import barChartBlack from "../assets/icons/barChartBlack.png";
import megaPhoneWhite from "../assets/icons/megaPhoneWhite.png";
import megaPhoneBlack from "../assets/icons/megaPhoneBlack.png";
import dollarWhite from "../assets/icons/dollarWhite.png";
import dollarBlack from "../assets/icons/dollarBlack.png";
import headPhonesBlack from "../assets/icons/headPhonesBlack.png";

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
<style scoped>
/* Ensuring scroll on smaller screens */
@media (max-width: 767px) {
  .h-full {
    max-height: calc(100vh - 70px); /* Adjust height as needed */
  }
  .overflow-y-auto {
    overflow-y: auto;
  }
}
</style>
