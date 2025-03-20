<template>
  <div
    class="grid grid-cols-1 p-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4"
  >
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="relative h-[160px] rounded-xl p-4 text-center shadow-md overflow-hidden"
      :class="card.gradient"
    >
      <!-- Icon in Rounded Transparent Div -->
      <div
        class="absolute top-4 left-4 bg-white bg-opacity-20 rounded-[8px] p-2"
      >
        <img :src="card.icon" alt="icon" class="w-6 h-6 object-contain" />
      </div>

      <!-- Percentage in Rounded Transparent Div -->
      <div
        class="absolute top-6 right-4 bg-white bg-opacity-20 rounded-[8px] px-3 py-1"
      >
        <p
          class="text-sm font-semibold"
          :class="
            card.percentage.startsWith('+') ? 'text-green-500' : 'text-red-500'
          "
        >
          {{ card.percentage }}
        </p>
      </div>

      <!-- Title & Value in Bottom-Left -->
      <div class="absolute bottom-2 left-4 text-left">
        <p class="text-lg font-regular pb-[5px] text-white">{{ card.title }}</p>
        <p class="text-2xl font-medium text-white">{{ card.value }}</p>
      </div>

      <!-- Circle Designs -->
      <div
        class="absolute bottom-[-28px] right-[-28px] w-[100px] h-[100px] border-[2px] border-white rounded-full opacity-30"
      ></div>
      <div
        class="absolute bottom-[-20px] right-[-20px] w-[70px] h-[70px] border-[2px] border-white rounded-full opacity-40"
      ></div>
      <div
        class="absolute bottom-[-14px] right-[-14px] w-[45px] h-[45px] border-[2px] border-white rounded-full opacity-60"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

import bookingIcon from "@/assets/icons/bookingWhite.png";
import flightIcon from "@/assets/icons/FlightLandingWhite.png";
import timeIcon from "@/assets/icons/timeWhite.png";
import dollarIcon from "@/assets/icons/dollarWhite.png";

const props = defineProps({
  salesAmount: Number,
  scheduledCount: Number,
  activeCount: Number,
  bookingCount: Number,
});

const cards = computed(() => [
  {
    title: "Sales",
    value: `$${props.salesAmount.toLocaleString()}`,
    percentage: "+20.00%",
    gradient: "bg-gradient-to-br from-purple-700 to-white",
    icon: dollarIcon,
  },
  {
    title: "Scheduled Flights",
    value: props.scheduledCount,
    percentage: "+15.00%",
    gradient: "bg-gradient-to-br from-green-400 to-green-100",
    icon: flightIcon,
  },
  {
    title: "Active Flights",
    value: props.activeCount,
    percentage: "-5.00%",
    gradient: "bg-gradient-to-br from-sky-500 to-blue-100",

    icon: timeIcon,
  },
  {
    title: "Total Bookings",
    value: props.bookingCount,
    percentage: "+12.50%",
    gradient: "bg-gradient-to-br from-yellow-400 to-yellow-100",
    icon: bookingIcon,
  },
]);
</script>
