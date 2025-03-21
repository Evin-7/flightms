<template>
  <div class="flex flex-wrap p-4 flex-row justify-start">
    <div class="w-[32%]">
      <div class="flex space-x-4 border-b">
        <span
          v-for="(tab, index) in tabs"
          :key="index"
          @click="activeTab = tab"
          :class="[
            'cursor-pointer py-2',
            activeTab === tab
              ? 'text-flightmsdarkpurple border-b-[3px] border-flightmsdarkpurple'
              : 'text-[#A0A0A0]',
          ]"
        >
          {{ tab }}
        </span>
      </div>
    </div>
    <div class="w-[68%] text-right">
      <div class="flex justify-end">
        <button
          class="bg-flightmsdarkpurple text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#4B0082] transition-all"
        >
          <span class="text-sm"> + Add New Flight </span>
        </button>
      </div>
    </div>
  </div>

  <div class="flex flex-wrap p-4 flex-row justify-start">
    <div class="w-[32%]">
      <div class="flex w-[40%] items-center space-x-2 bg-white/50 p-2 rounded-md">
        <span class="text-flightmspurple">{{ currentDate }}</span>
        <img
          src="@/assets/icons/calendarBlack.png"
          alt="Dropdown Icon"
          class="w-4 h-4"
        />
      </div>
    </div>
    <div class="w-[68%] text-right">
      <div class="flex justify-end items-center">
        <div
          class="w-[40px] bg-white font-normal rounded-md text-center text-[24px] text-black cursor-pointer"
          @click="prevWeek"
        >
          ‹
        </div>
        <div class="w-[20px] bg-white"></div>
        <div
          class="w-[40px] bg-white font-normal rounded-md text-[24px] text-center text-black cursor-pointer"
          @click="nextWeek"
        >
          ›
        </div>
      </div>
    </div>
  </div>

  <div class="flex flex-wrap p-4 flex-row justify-center">
    <div class="flex justify-between w-full">
      <div
        v-for="(day, index) in weekDays"
        :key="index"
        :class="[
          'flex flex-col items-center justify-center rounded-md w-[140px] h-[90px] p-2',
          isToday(day.fullDate) ? 'bg-[#5E56C7] text-white' : 'bg-white',
        ]"
      >
        <span class="text-lg font-normal">{{ day.date }}</span>
        <span class="text-sm font-light">{{ day.day }}</span>
      </div>
    </div>
  </div>

  <div class="flex flex-wrap justify-center">
    <div v-if="flightDetails.length === 0" class="text-center text-gray-500 p-4">
      No flights available.
    </div>
    <div class="flex flex-row flex-wrap justify-center">
      <div class="w-[100%]">
        <sectionFlightCard :flights="flightDetails" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import flightDetails from "@/data/flightDetails.json";
import sectionFlightCard from "../components/FlightView/section/sectionFlightCard.vue";
import {
  startOfWeek,
  addDays,
  format,
  isSameDay,
  subWeeks,
  addWeeks,
} from "date-fns";

const tabs = ["Upcoming", "Completed", "Real-time tracking"];
const activeTab = ref("Upcoming");
const today = new Date();
const currentDate = ref(
  today.toLocaleDateString("en-US", { year: "numeric", month: "long" })
);

const startOfWeekDate = ref(startOfWeek(today, { weekStartsOn: 0 })); // Sunday start

const weekDays = computed(() => {
  const days = [];
  for (let i = 0; i < 7; i++) {
    const day = addDays(startOfWeekDate.value, i);
    days.push({
      date: format(day, "dd"),
      day: format(day, "EEE").toUpperCase(),
      fullDate: day,
    });
  }
  return days;
});

function prevWeek() {
  startOfWeekDate.value = subWeeks(startOfWeekDate.value, 1);
}

function nextWeek() {
  startOfWeekDate.value = addWeeks(startOfWeekDate.value, 1);
}

function isToday(fullDate) {
  return isSameDay(fullDate, today);
}
</script>