<template>
  <div class="p-2 lg:p-4 bg-white rounded-xl">
    <div class="flex items-center flex-wrap justify-between mb-4">
      <span
        class="text-sm lg:text-xl text-left font-medium text-flightmsdarkpurple"
      >
        Flight Information
      </span>

      <div class="flex items-center space-x-6">
        <div class="flex items-center space-x-2">
          <div
            class="w-3 h-3 bg-blue-500 rounded-full border border-white"
          ></div>
          <p class="text-sm text-flightmsdarkpurple">
            Enroute
            <span class="font-semibold text-lg">{{ enroute }}</span>
          </p>
        </div>

        <div class="flex items-center space-x-2">
          <div
            class="w-3 h-3 bg-green-500 rounded-full border border-white"
          ></div>
          <p class="text-sm text-flightmsdarkpurple">
            Taxi
            <span class="font-semibold text-lg">{{ taxi }}</span>
          </p>
        </div>

        <div class="flex items-center space-x-2">
          <div class="w-3 h-3 bg-white border border-black rounded-full"></div>
          <p class="text-sm text-flightmsdarkpurple">
            Parked
            <span class="font-semibold text-lg">{{ parked }}</span>
          </p>
        </div>
      </div>
    </div>

    <!-- Map Container -->
    <div
      id="map"
      class="w-full z-10 rounded-md overflow-hidden h-[370px]"
    ></div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, nextTick } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import planeIconUrl from "@/assets/icons/flightWhite.png"; // Use your plane icon URL

// Props for incoming data (enroute, taxi, parked)
const props = defineProps({
  enroute: Number,
  taxi: Number,
  parked: Number,
});

let map = null;

onMounted(() => {
  nextTick(() => {
    initMap();
  });
});

function initMap() {
  // Ensure the map is cleared before reinitializing
  if (map) {
    map.off();
    map.remove();
    map = null;
    const mapElement = document.getElementById("map");
    if (mapElement) {
      mapElement.innerHTML = "";
    }
  }

  // Initialize map
  map = L.map("map").setView([30, -10], 2);

  // Add OpenStreetMap tiles
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  // Flight routes data
  const flightRoutes = [
    {
      path: [
        [37.0902, -95.7129], // USA
        [41.9028, 12.4964], // Italy
        [20.5937, 78.9629], // India
      ],
      color: "#00FFCC", // Color for this route
    },
    {
      path: [
        [34.0522, -118.2437], // USA (Los Angeles)
        [48.8566, 2.3522], // France (Paris)
      ],
      color: "#FF5733", // Color for this route
    },
    {
      path: [
        [40.7128, -74.006], // USA (New York)
        [35.6762, 139.6503], // Japan (Tokyo)
      ],
      color: "#67e1ff", // Color for this route
    },
    {
      path: [
        [-33.8688, 151.2093], // Australia (Sydney)
        [1.3521, 103.8198], // Singapore
      ],
      color: "#FF6347", // Color for this route
    },
  ];

  // Loop through flight routes to draw them on the map
  flightRoutes.forEach((route) => {
    // Add polyline for each route with a thinner line (e.g., weight: 1)
    L.polyline(route.path, {
      color: route.color,
      weight: 1, // Decreased thickness
      opacity: 0.7, // Line opacity
    }).addTo(map);

    // Add markers at the start and end of each route
    const markers = [
      { position: route.path[0] }, // Starting point
      { position: route.path[route.path.length - 1] }, // Ending point
    ];

    markers.forEach((marker) => {
      const icon = L.icon({
        iconUrl: planeIconUrl, // Use your custom plane icon URL
        iconSize: [32, 32],
        iconAnchor: [16, 16], // Center the icon
      });

      L.marker(marker.position, { icon: icon }).addTo(map);
    });
  });

  // Invalidate the size of the map after the DOM is updated
  if (map) {
    map.invalidateSize();
  }
}

onBeforeUnmount(() => {
  if (map) {
    map.off();
    map.remove();
    map = null;
    const mapElement = document.getElementById("map");
    if (mapElement) {
      mapElement.innerHTML = "";
    }
  }
});
</script>

<style>
/* Dark Theme with Dark Green Oceans */
.leaflet-layer,
.leaflet-control-zoom-in,
.leaflet-control-zoom-out,
.leaflet-control-attribution {
  filter: invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%);
}
</style>
