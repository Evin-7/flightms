<template>
  <div
    v-for="flight in mappedFlights"
    :key="flight.id"
    class="w-[146vh] bg-white pb-[20px] rounded-lg relative mb-4"
  >
    <div class="flex flex-wrap justify-center flex-row pt-[20px] pb-[20px]">
      <div class="w-[94%] flex items-center">
        {{ flight.aircraft }}
        <div
          class="ml-2 bg-flightmslightgray border border-red-500 flex h-[30px] items-center justify-center text-[#ff0000] text-xs px-2 py-1 rounded-[3px]"
          v-if="flight.status === 'Cancelled'"
        >
          <span class="text-[9px] font-normal">{{ flight.status }}</span>
        </div>
        <div
          class="ml-2 bg-green-200 border border-green-500 flex h-[30px] items-center justify-center text-green-600 text-xs px-2 py-1 rounded-[3px]"
          v-else
        >
          <span class="text-[9px] font-normal">{{ flight.status }}</span>
        </div>
      </div>
      <div class="w-[2%] flex items-end relative">
        <span
          class="text-2xl transform rotate-90 cursor-pointer"
          @click="toggleTooltip(flight.id)"
          >&#8943;</span
        >
        <div
          v-if="showTooltip === flight.id"
          class="absolute right-0 top-full mt-2 bg-white border rounded-[12px] p-2 w-[140px] z-50"
        >
          <button
            class="block w-full text-[13px] text-left py-1 pl-[10px] hover:bg-gray-100"
          >
            Edit Flight
          </button>
          <button
            class="block w-full text-[13px] text-left py-1 pl-[10px] hover:bg-gray-100"
          >
            Assign Staff
          </button>
          <button
            class="block w-full text-[13px] text-left py-1 pl-[10px] hover:bg-gray-100"
          >
            Manage Booking
          </button>
          <button
            class="block w-full text-[13px] text-left py-1 pl-[10px] hover:bg-gray-100"
          >
            Cancel Flight
          </button>
        </div>
      </div>
    </div>

    <div class="items-center">
      <div
        class="pl-[20px] flex flex-wrap justify-center items-center flex-row"
      >
        <div
          class="w-[85%] flex-row flex flex-wrap rounded-[12px] p-4 h-[110px]"
          :class="
            flight.status === 'Cancelled'
              ? 'bg-red-100'
              : 'bg-flightmslightgray'
          "
        >
          <div class="w-[28%] pt-[10px]">
            <span class="text-[12px]">{{ flight.departure.date }}</span>
            <span class="block text-[18px] font-medium pt-[6px]">{{
              flight.departure.time
            }}</span>
            <span class="text-[12px] block">{{
              flight.departure.airport
            }}</span>
          </div>

          <div class="w-[40%] pt-[10px] items-center text-center">
            <div class="flex pt-[10px] justify-center items-center">
              <div class="flex items-center">
                <img
                  :src="FlightTakeoffBlack"
                  alt="Airplane Takeoff"
                  class="w-[25px] -mb-[10px] h-[25px]"
                />
                <div class="text-black text-[8px] mx-2">--------------</div>
              </div>
              <div
                class="bg-white text-sm rounded-md p-2 h-[35px] flex justify-center items-center mx-2"
              >
                {{ flight.duration }}
              </div>
              <div class="flex items-center">
                <div class="text-black text-[8px] mx-2">--------------</div>
                <img
                  :src="FlightLandingBlack"
                  alt="Airplane Landing"
                  class="w-[20px] -mb-[10px] h-[20px]"
                />
              </div>
            </div>
          </div>

          <div class="w-[32%] items-end text-right">
            <span class="text-[12px]">{{ flight.arrival.date }}</span>
            <span class="block text-[18px] font-medium pt-[6px]">{{
              flight.arrival.time
            }}</span>
            <span class="text-[12px] block">{{ flight.arrival.airport }}</span>
          </div>
        </div>

        <div
          class="flex flex-wrap justify-center items-center flex-row w-[15%]"
        >
          <div
            :class="
              flight.status === 'Cancelled'
                ? 'bg-red-100'
                : 'bg-flightmslightgray'
            "
            class="rounded-[12px] h-[110px] w-[70%] flex flex-col justify-center items-center"
          >
            <div class="-mt-[10px]">
              <span class="text-[8px]"> Pilots & Crew </span>
            </div>
            <div class="relative pt-[10px] flex justify-center">
              <img
                v-for="(crew, index) in flight.crew"
                :key="index"
                :src="crew"
                class="w-[25px] h-[25px] -mt-[2px] -mr-[10px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap justify-center flex-row pt-[20px] pb-[10px]">
      <div class="w-[96%] flex items-center text-[12px]">
        Occupancy: {{ flight.occupancy.total }} ({{
          flight.occupancy.economy
        }}
        Economy | {{ flight.occupancy.business }} Business left)
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import FlightTakeoffBlack from "../../../assets/icons/FlightTakeoffBlack.png";
import FlightLandingBlack from "../../../assets/icons/FlightLandingBlack.png";

// Import crew images
import air1 from "../../../assets/images/air1.jpg";
import air2 from "../../../assets/images/air2.jpg";
import air3 from "../../../assets/images/air3.jpg";
import air4 from "../../../assets/images/air4.jpg";
import air5 from "../../../assets/images/air5.jpg";
import air6 from "../../../assets/images/air6.jpg";

import { defineProps } from "vue";

const crewImages = [air1, air2, air3, air4, air5, air6];

const props = defineProps({
  flights: Array,
});

// Ensure crew images are assigned properly
const mappedFlights = computed(() =>
  props.flights.map((flight, index) => ({
    ...flight,
    crew: crewImages.slice(index * 3, index * 3 + 3), // Assign three images per flight
  })),
);

const showTooltip = ref(null);

const toggleTooltip = (id) => {
  showTooltip.value = showTooltip.value === id ? null : id;
};
</script>
