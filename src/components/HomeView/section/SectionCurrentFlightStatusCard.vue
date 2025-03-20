<template>
  <div class="p-2 lg:p-4 bg-white rounded-xl">
    <div class="flex items-center flex-wrap justify-between mb-4">
      <span
        class="text-sm lg:text-xl text-left font-medium text-flightmsdarkpurple"
      >
        Current Flight Status
      </span>

      <div class="relative">
        <select
          v-model="selectedStatus"
          class="appearance-none bg-white text-flightmsdarkpurple py-1 px-3 pr-8 rounded-md border border-[#D3D3D3] cursor-pointer focus:outline-none focus:ring-0"
        >
          <option value="all">All Flights</option>
          <option value="enroute">Enroute</option>
          <option value="taxi">Taxi</option>
          <option value="parked">Parked</option>
        </select>

        <div class="absolute top-1/2 right-2 transform -translate-y-1/2">
          <img
            src="@/assets/icons/downBlack.png"
            alt="Dropdown Icon"
            class="w-4 h-4"
          />
        </div>
      </div>
    </div>

    <div
      class="grid grid-cols-4 p-2 font-medium text-flightmsdarkpurple pb-2 mb-2"
    >
      <span>Aircraft</span>
      <span>Dep</span>
      <span>Status</span>
      <span>Arr</span>
    </div>

    <div
      v-for="(flight, index) in filteredFlights"
      :key="index"
      :class="[
        'grid grid-cols-4   text-sm text-flightmsdarkpurple py-2 rounded-md mb-1',
        selectedStatus !== 'all' &&
        flight.status.toLowerCase().includes(selectedStatus)
          ? 'bg-red-100'
          : 'bg-gray-100',
      ]"
    >
      <span class="pl-[10px] flex items-center">
        {{ flight.aircraft }}
        <img
          v-if="index === 0"
          src="@/assets/icons/connectionLostRed.png"
          alt="Connection Lost"
          class="w-[13px] pl-[3px] h-[13px] object-contain"
        />
      </span>
      <span>{{ flight.dep }}</span>
      <span>{{ flight.status }}</span>
      <span>{{ flight.arr }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  flightData: Array,
});

const selectedStatus = ref("all");

const filteredFlights = computed(() => {
  if (selectedStatus.value === "all") {
    return props.flightData;
  } else {
    return props.flightData.filter((flight) =>
      flight.status.toLowerCase().includes(selectedStatus.value),
    );
  }
});
</script>
