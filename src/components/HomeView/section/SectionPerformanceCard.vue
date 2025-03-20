<template>
  <div class="p-4 bg-white rounded-xl h-[300px]">
    <!-- Header Section -->
    <div class="flex items-center justify-between mb-4">
      <span class="text-xl font-medium text-flightmsdarkpurple">
        Performance
      </span>
      <!-- Dropdown Filter -->
      <div class="relative">
        <select
          v-model="selectedPeriod"
          class="appearance-none bg-white text-flightmsdarkpurple py-1 px-3 pr-8 rounded-md border border-[#D3D3D3] cursor-pointer focus:outline-none focus:ring-0"
          @change="handleFilterChange"
        >
          <option value="today">Today</option>
          <option value="tomorrow">Tomorrow</option>
          <option value="lastWeek">Last Week</option>
          <option value="lastMonth">Last Month</option>
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

    <!-- Pie Charts Row -->
    <div class="flex justify-between">
      <div class="flex flex-col items-center">
        <apexchart
          type="donut"
          :options="fleetOccupancyOptions"
          :series="fleetOccupancy"
          height="170"
          width="170"
        />
        <span class="mt-2 text-sm font-medium">Fleet Occupancy</span>
        <span class="-mt-[120px] text-sm font-bold">
          {{ fleetOccupancy[0] }}%
        </span>
      </div>

      <div class="flex flex-col items-center">
        <apexchart
          type="donut"
          :options="delayOptions"
          :series="delay"
          height="170"
          width="170"
        />
        <span class="mt-2 text-sm font-medium">Delay</span>
        <span class="-mt-[120px] text-sm font-bold">
          {{ delay[0] }}
        </span>
      </div>

      <div class="flex flex-col items-center">
        <apexchart
          type="donut"
          :options="cancellationsOptions"
          :series="cancellations"
          height="170"
          width="170"
        />
        <span class="mt-2 text-sm font-medium">Cancellations</span>
        <span class="-mt-[120px] text-sm font-bold">
          {{ cancellations[0] }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import VueApexCharts from "vue3-apexcharts";

// Props to receive the data for charts
defineProps({
  fleetOccupancy: Array,
  delay: Array,
  cancellations: Array,
});

const selectedPeriod = ref("today");

const basePieChartOptions = {
  chart: {
    type: "donut",
    width: "100%",
  },
  plotOptions: {
    pie: {
      donut: {
        size: "65%",
      },
      expandOnClick: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  labels: [],
  tooltip: {
    enabled: false,
  },
  legend: {
    show: false,
  },
};

const fleetOccupancyOptions = {
  ...basePieChartOptions,
  colors: ["#5E56C7", "#F6F6F6"],
};

const delayOptions = {
  ...basePieChartOptions,
  colors: ["#77DD77", "#F6F6F6"],
};

const cancellationsOptions = {
  ...basePieChartOptions,
  colors: ["#448EE4", "#F6F6F6"],
};

// Sample data for different periods
const data = {
  today: {
    fleetOccupancy: [70, 30],
    delay: [30, 70],
    cancellations: [30, 70],
  },
  tomorrow: {
    fleetOccupancy: [60, 40],
    delay: [20, 80],
    cancellations: [40, 60],
  },
  lastWeek: {
    fleetOccupancy: [80, 20],
    delay: [10, 90],
    cancellations: [20, 80],
  },
  lastMonth: {
    fleetOccupancy: [50, 50],
    delay: [50, 50],
    cancellations: [10, 90],
  },
};

// Function to handle the filter change
const handleFilterChange = () => {
  const periodData = data[selectedPeriod.value];
  fleetOccupancy.value = periodData.fleetOccupancy;
  delay.value = periodData.delay;
  cancellations.value = periodData.cancellations;
};

// Set the initial data
const fleetOccupancy = ref(data.today.fleetOccupancy);
const delay = ref(data.today.delay);
const cancellations = ref(data.today.cancellations);
</script>

<script>
// Register VueApexCharts as a local component
import VueApexCharts from "vue3-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts,
  },
};
</script>
