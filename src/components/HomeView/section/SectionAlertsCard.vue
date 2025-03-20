<template>
  <div
    class="p-4 bg-white text-flightmsdarkpurple rounded-xl h-auto lg:h-[300px]"
  >
    <div class="flex items-center justify-between mb-4">
      <span
        class="text-sm lg:text-xl text-left font-medium text-flightmsdarkpurple"
      >
        Alerts
      </span>
    </div>

    <div
      v-for="(alert, index) in alerts"
      :key="index"
      class="mb-4 flex items-center justify-between"
      :class="{ 'border-b pt-2 border-gray': index === 0 }"
    >
      <img
        v-if="index === 0"
        src="@/assets/icons/connectionLostRed.png"
        alt="Connection Lost"
        class="w-5 h-5 mr-2"
      />
      <img
        v-if="index === 1"
        src="@/assets/icons/decreaseRed.png"
        alt="Decrease"
        class="w-5 h-5 mr-2"
      />

      <div class="flex-grow pl-[15px]">
        <div class="text-sm font-medium">
          <span>{{ alert.type }}</span>
          <div class="text-sm font-medium">
            {{ alert.flight }}
          </div>
        </div>
      </div>

      <div class="text-xs text-flightmsdarkpurple">
        {{ alert.timeAgo }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  alerts: Array,
});
</script>
