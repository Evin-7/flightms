<template>
  <div class="p-4 bg-white rounded-xl h-[450px]">
    <div class="flex items-center justify-between mb-4">
      <span class="text-xl text-left font-medium text-flightmsdarkpurple">
        Sales
      </span>
    </div>
    <apexchart
      type="bar"
      :options="salesChartOptions"
      :series="salesSeries"
      height="350"
    />
  </div>
</template>
  
  <script setup>
import { ref } from "vue";
import VueApexCharts from "vue3-apexcharts";

// Sales data
const salesSeries = ref([
  {
    name: "Sales",
    data: [75, 46, 66, 25, 50, 85, 46], // Actual sales values (Adjusted to 0-100)
    color: "#1A103D", // Dark color for the filled portion
  },
  {
    name: "Unfilled Sales",
    data: [100, 100, 40, 100, 100, 100, 100], // Unfilled portion (100 - actual value)
    color: "#F6F6F6",
  },
]);

// Chart configuration
const salesChartOptions = ref({
  chart: {
    type: "bar",
    height: 350,
    stacked: true, // Stacking the bars to overlay the filled and unfilled portions
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
      columnWidth: "60%", // Decrease the bar width here
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: [
      "June 01",
      "June 02",
      "June 03",
      "June 04",
      "June 05",
      "June 06",
      "Sep 16",
    ],
  },
  yaxis: {
    labels: {
      formatter: function (val) {
        return val + "k";
      },
    },
    tickAmount: 5, // 5 ticks to get 20k, 40k, 60k, 80k, 100k
    min: 0,
    max: 100,
    forceNiceScale: true,
  },
  legend: {
    show: false, // Hide the legend if you don't need it
  },
});
</script>
  
  <script>
import VueApexCharts from "vue3-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts,
  },
};
</script>