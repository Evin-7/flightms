<template>
  <div class="p-4 bg-white rounded-xl">
    <div class="flex items-center justify-between mb-4">
      <span class="text-xl text-left font-medium text-flightmsdarkpurple">
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
    <div id="map" class="w-full h-[360px] rounded-md overflow-hidden"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import planeIconUrl from "@/assets/icons/flightWhite.png";

// Props
defineProps({
  enroute: Number,
  taxi: Number,
  parked: Number,
});

onMounted(() => {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 30, lng: -10 },
    zoom: 2,
    styles: [
      {
        elementType: "geometry",
        stylers: [{ color: "#f5f5f5" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#b0e0e6" }],
      },
    ],
  });

  const flightRoutes = [
    {
      path: [
        { lat: 37.0902, lng: -95.7129 },
        { lat: 41.9028, lng: 12.4964 },
        { lat: 20.5937, lng: 78.9629 },
      ],
      color: "#00FFCC",
    },
    {
      path: [
        { lat: 34.0522, lng: -118.2437 },
        { lat: 48.8566, lng: 2.3522 },
      ],
      color: "#00FFCC",
    },

    {
      path: [
        { lat: 40.7128, lng: -74.006 },
        { lat: 35.6762, lng: 139.6503 },
      ],
      color: "#67e1ff",
    },
    {
      path: [
        { lat: -33.8688, lng: 151.2093 },
        { lat: 1.3521, lng: 103.8198 },
      ],
      color: "#67e1ff",
    },
  ];

  flightRoutes.forEach((route) => {
    const flightPath = new google.maps.Polyline({
      path: route.path,
      geodesic: false,
      strokeColor: route.color,
      strokeOpacity: 0.9,
      strokeWeight: 1,
    });

    flightPath.setMap(map);

    const markers = [
      { position: route.path[0] },
      { position: route.path[route.path.length - 1] },
    ];

    markers.forEach((marker) => {
      new google.maps.Marker({
        position: marker.position,
        map,
        icon: {
          url: planeIconUrl,
          scaledSize: new google.maps.Size(30, 30),
        },
      });
    });
  });
});
</script>
