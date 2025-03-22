<template>
  <div class="p-2 lg:p-4 h-auto lg:h-[430px] bg-flightmswhite rounded-xl">
    <div class="flex items-center justify-between mb-4">
      <span
        class="text-sm lg:text-xl text-left font-medium text-flightmsdarkpurple"
      >
        Sales
      </span>
      <!-- Select dropdown on the right -->
      <div class="relative">
        <select
          v-model="selectedOption"
          class="appearance-none bg-flightmswhite text-flightmsdarkpurple py-1 px-3 pr-8 rounded-md border border-[#D3D3D3] cursor-pointer focus:outline-none focus:ring-0"
          @change="updateChartData"
        >
          <option value="lastWeek">Last Week</option>
          <option value="lastMonth">Last Month</option>
          <option value="lastQuarter">Last Quarter</option>
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
    <apexchart
      type="bar"
      :options="salesChartOptions"
      :series="salesSeries"
      height="350"
    />
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted } from "vue";
import VueApexCharts from "vue3-apexcharts";

// Props to receive sales data
const props = defineProps({
  salesData: Object,
});

// Reactive data for sales series and chart options
const salesSeries = ref([]);
const salesChartOptions = ref({
  chart: {
    type: "bar",
    height: 350,
    stacked: true,
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
      columnWidth: "60%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: [],
  },
  yaxis: {
    labels: {
      formatter: function (val) {
        return val + "k";
      },
    },
    tickAmount: 5,
    min: 0,
    max: 100,
    forceNiceScale: true,
  },
  legend: {
    show: false,
  },
});

// Reactive property for the selected option
const selectedOption = ref("lastWeek");

// Method to update the chart data based on the selected option
const updateChartData = () => {
  let salesData;
  switch (selectedOption.value) {
    case "lastWeek":
      salesData = {
        sales: [50, 60, 70, 55, 80, 90, 65], // Sample data for last week
        unfilledSales: [100, 100, 30, 100, 100, 100, 90],
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      };
      break;
    case "lastMonth":
      salesData = {
        sales: [10, 50, 25, 90, 40, 80, 50], // Sample data for last month
        unfilledSales: [100, 100, 30, 100, 100, 100, 90],

        categories: [
          "Week 1",
          "Week 2",
          "Week 3",
          "Week 4",
          "Week 5",
          "Week 6",
          "Week 7",
        ],
      };
      break;
    case "lastQuarter":
      salesData = {
        sales: [80, 50, 10, 50, 25, 90, 40], // Sample data for last quarter
        unfilledSales: [100, 100, 30, 100, 100, 100, 90],

        categories: ["Jan-Mar", "Apr-Jun", "Jul-Sep", "Oct-Dec"],
      };
      break;
    default:
      salesData = {
        sales: [75, 46, 66, 25, 50, 85, 46], // Default sales data (last week)
        unfilledSales: [100, 100, 40, 100, 100, 100, 100],
        categories: [
          "June 01",
          "June 02",
          "June 03",
          "June 04",
          "June 05",
          "June 06",
          "Sep 16",
        ],
      };
  }

  salesSeries.value = [
    {
      name: "Sales",
      data: salesData.sales,
      color: "#1A103D",
    },
    {
      name: "Unfilled Sales",
      data: salesData.unfilledSales,
      color: "#F6F6F6",
    },
  ];
  salesChartOptions.value.xaxis.categories = salesData.categories;
};

// Call the function to initialize data on mount
onMounted(() => {
  updateChartData(); // Initialize the chart with default data
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
