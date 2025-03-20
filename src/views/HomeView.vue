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
      <SectionCurrentFlightStatusCard :flightData="flightData" />
    </div>
  </div>

  <div class="flex flex-wrap p-4 flex-row justify-center">
    <div class="w-[65%]">
      <SectionPerformanceCard
        :fleetOccupancy="performanceData.fleetOccupancy"
        :delay="performanceData.delay"
        :cancellations="performanceData.cancellations"
      />
    </div>
    <div class="w-[35%] pl-[20px]">
      <sectionAlertsCard :alerts="alertsData.alerts" />
    </div>
  </div>

  <div class="flex flex-wrap p-4 flex-row justify-center">
    <div class="w-[65%]">
      <sectionSalesCard
        
      />
    </div>
    <div class="w-[35%] pl-[20px]">
      <SectionPopularRatesCard  />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import SectionPopularRatesCard from "../components/HomeView/section/SectionPopularRatesCard.vue";
import sectionSalesCard  from  "../components/HomeView/section/sectionSalesCard.vue";
import SectionCurrentFlightStatusCard from "../components/HomeView/section/SectionCurrentFlightStatusCard.vue";
import SectionFlightInformationCard from "../components/HomeView/section/SectionFlightInformationCard.vue";
import SectionTopCards from "@/components/HomeView/section/SectionTopCards.vue";
import summaryData from "@/data/summaryData.json";
import SectionPerformanceCard from "@/components/HomeView/section/SectionPerformanceCard.vue";
import sectionAlertsCard from "@/components/HomeView/section/sectionAlertsCard.vue";
import flightData from "@/data/currentFlightData.json";
import performanceData from "@/data/performanceData.json";
import alertsData from "@/data/alertsData.json"; // Import the alerts data
</script>
