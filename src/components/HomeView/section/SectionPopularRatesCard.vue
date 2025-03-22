<template>
  <div class="p-2 lg:p-4 h-auto lg:h-[430px] bg-flightmswhite rounded-xl">
    <div class="flex items-center justify-between mb-4">
      <span
        class="text-sm lg:text-xl text-left font-medium text-flightmsdarkpurple"
      >
        Popular Routes
      </span>
      <!-- Select dropdown on the right -->
      <div class="relative">
        <select
          v-model="selectedOption"
          @change="updateRoutes"
          class="appearance-none bg-flightmswhite text-flightmsdarkpurple py-1 px-3 pr-8 rounded-md border border-[#D3D3D3] cursor-pointer focus:outline-none focus:ring-0"
        >
          <option value="all">All Routes</option>
          <option value="short">Short Distance</option>
          <option value="long">Long Distance</option>
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

    <!-- Routes List -->
    <ul>
      <li
        v-for="(route, index) in filteredRoutes"
        :key="index"
        class="flex justify-between items-center mb-4 last:mb-0 border-b last:border-0 border-gray-300 p-2"
      >
        <span class="text-[13px]">{{ route.route }}</span>
        <span class="font-medium text-[16px]">{{ route.distance }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, defineProps, watch } from "vue";

// Define props to receive routes data from parent component
const props = defineProps({
  routes: {
    type: Array,
    required: true,
  },
});

const selectedOption = ref("all");

const filteredRoutes = ref([...props.routes]);

watch(
  () => props.routes,
  () => {
    updateRoutes();
  },
  { immediate: true },
);

function updateRoutes() {
  const routes = props.routes.map((route) => ({
    ...route,
    distance: parseInt(route.distance),
  }));

  if (selectedOption.value === "short") {
    filteredRoutes.value = routes.filter((route) => route.distance < 100); // Changed to 200 for short routes
  } else if (selectedOption.value === "long") {
    filteredRoutes.value = routes.filter((route) => route.distance >= 100); // Long distance >= 500 miles
  } else {
    filteredRoutes.value = routes;
  }
}
</script>
