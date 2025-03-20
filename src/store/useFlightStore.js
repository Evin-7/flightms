import { defineStore } from "pinia";
import flightData from "@/data/flightData.json"; // ✅ Correct path for Vite projects

export const useFlightStore = defineStore("flightStore", {
  state: () => ({
    flights: [],
  }),
  actions: {
    loadFlights() {
      this.flights = flightData;
    },
    simulateRealTimeUpdates() {
      setInterval(() => {
        this.flights = this.flights.map((flight) => ({
          ...flight,
          status: Math.random() > 0.5 ? "On Time" : "Delayed",
        }));
      }, 5000);
    },
  },
});
