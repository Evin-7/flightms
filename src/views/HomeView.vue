<template>
  <div class="p-4">
    <SectionTopCards
      :salesAmount="summaryData.sales.amount"
      :scheduledCount="summaryData.scheduledFlights.count"
      :activeCount="summaryData.activeFlights.count"
      :bookingCount="summaryData.totalBookings.count"
    />
  </div>

  <div class="flex flex-wrap p-4 flex-row justify-center">
    <div class="w-[65%]">
      <SectionFlightInformationCard
        :enroute="summaryData.flightInformation.enroute"
        :taxi="summaryData.flightInformation.taxi"
        :parked="summaryData.flightInformation.parked"
      />
    </div>
    <div class="w-[35%] pl-[20px]">
      <SectionCurrentFlightStatusCard />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import SectionCurrentFlightStatusCard from "../components/HomeView/section/SectionCurrentFlightStatusCard.vue";
import SectionFlightInformationCard from "../components/HomeView/section/SectionFlightInformationCard.vue";
import SectionTopCards from "@/components/HomeView/section/SectionTopCards.vue";
import summaryData from "@/data/summaryData.json";
</script>
