<template>
  <div class="p-4">
    <SectionTopCards
      :salesAmount="summaryData.sales.amount"
      :scheduledCount="summaryData.scheduledFlights.count"
      :activeCount="summaryData.activeFlights.count"
      :bookingCount="summaryData.totalBookings.count"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import SectionTopCards from "@/components/HomeView/section/SectionTopCards.vue";
import summaryData from "@/data/summaryData.json";
</script>
